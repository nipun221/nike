# **Nike React – Full CI/CD Pipeline with Jenkins + NGINX (Staging Deployment)**

## 📺 Live Demo Video: https://youtu.be/fLFWhiYAPB4

This repository contains a **React + Vite** application and a complete **CI/CD pipeline** implemented using **Jenkins**, **GitHub Webhooks**, **a dedicated Jenkins Agent**, **artifact passing**, and **NGINX staging deployment**.

The goal of this project is to demonstrate a **fully automated pipeline**:

🚀 On every push to GitHub
→ CI job builds the React application
→ Artifacts are archived
→ CD job automatically deploys the build
→ Nginx serves the latest build at `http://localhost:8085`

---

# **📌 Table of Contents**

1. [Project Overview](#project-overview)
2. [Tools Used](#tools-used)
3. [Project Setup (React + Vite)](#project-setup-react--vite)
4. [Jenkins Setup](#jenkins-setup)
5. [Jenkins Agent (slave) Setup](#jenkins-agent-slave-setup)
6. [GitHub Webhook + Ngrok Integration](#github-webhook--ngrok-integration)
7. [CI Pipeline (nike-pipeline / upstream)](#ci-pipeline-nike-pipeline--upstream)
8. [CD Pipeline (nike-deployment / downstream)](#cd-pipeline-nike-deployment--downstream)
9. [NGINX Staging Deployment](#nginx-staging-deployment)
10. [Folder Permissions Fix](#folder-permissions-fix)
11. [Final Workflow Summary](#final-workflow-summary)

---

# **📌 Project Overview**

This project represents a **real-world CI/CD pipeline**:

* GitHub triggers Jenkins automatically
* React app is built using Vite
* The CI job archives the compiled `/dist` folder
* The CD job downloads the artifact
* The final output is deployed to `/opt/staging/nike/`
* NGINX serves the build on `http://localhost:8085`

---

# **🛠 Tools Used**

| Tool                      | Purpose                              |
| ------------------------- | ------------------------------------ |
| **React + Vite**          | Frontend application                 |
| **Node.js 18+**           | Build environment                    |
| **Jenkins**               | CI & CD automation                   |
| **Jenkins SSH Agent**     | Runs builds and deployments          |
| **GitHub Webhooks**       | Auto-trigger builds on push          |
| **ngrok**                 | Public URL to deliver webhook events |
| **NGINX**                 | Staging server for frontend          |
| **Linux (Fedora/Ubuntu)** | Host OS                              |

---

# **🧱 Project Setup (React + Vite)**

Create the project:

```bash
npm create vite@latest nike
cd nike
npm install
npm run dev
```

Build output goes into:

```
/dist
```

---

# **🔧 Jenkins Setup**

## Install Jenkins (Fedora example)

```bash
sudo dnf install jenkins -y
sudo systemctl enable --now jenkins
```

Open:

```
http://localhost:8080
```

Install recommended plugins.

---

# **🤖 Jenkins Agent (slave) Setup**

Create SSH key for Jenkins user:

```bash
sudo -u jenkins ssh-keygen -t ed25519 -N ''
```

Authorize localhost access:

```bash
sudo -u jenkins ssh-copy-id jenkins@localhost
```

Ensure Jenkins user has shell access:

```bash
sudo usermod -s /bin/bash jenkins
```

Restart Jenkins:

```bash
sudo systemctl restart jenkins
```

---

# **🌐 GitHub Webhook + Ngrok Integration**

Expose Jenkins using ngrok:

```bash
ngrok http 8080
```

Copy the forwarding URL:

```
https://abc123.ngrok.io
```

Add webhook in GitHub:

```
Repo → Settings → Webhooks → Add Webhook

Payload URL: https://abc123.ngrok.io/github-webhook/
Content type: application/json
Events: Just push events
```

This allows GitHub to notify Jenkins on every push.

---

# **🏗 CI Pipeline (Upstream – nike-pipeline)**

### Jenkinsfile: `nike-ci`

This pipeline:

✔ Checks out code
✔ Installs dependencies
✔ Builds Vite project
✔ Shows workspace contents
✔ Archives `dist` folder
✔ Triggers the CD job

```groovy
pipeline {
    agent { label 'slaveAgent' }
    tools { nodejs 'Node_25' }
    options { timestamps() }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci || npm install'
            }
        }

        stage('Build and Archive') {
            steps {
                sh 'npm run build'
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }

        stage('Trigger Downstream Job') {
            steps {
                build job: 'nike-deployment', wait: false
            }
        }
    }

    post {
        success { echo 'Build Succeeded!' }
        failure { echo 'Build failed!' }
    }
}
```

---

# **🚀 CD Pipeline (Downstream – nike-deployment)**

### Jenkinsfile: `nike-cd`

This pipeline:

✔ Downloads artifacts from CI job
✔ Cleans staging directory
✔ Deploys the new build
✔ Shows final deployed files

```groovy
pipeline {
    agent { label 'slaveAgent' }
    options { timestamps() }

    stages {
        stage('Download Artifact') {
            steps {
                copyArtifacts(
                    projectName: 'nike-pipeline',
                    selector: lastSuccessful()
                )
            }
        }

        stage('Prepare Staging Folder') {
            steps {
                sh '''
                    mkdir -p /opt/staging/nike
                    rm -rf /opt/staging/nike/* || true
                '''
            }
        }

        stage('Deploy to staging') {
            steps {
                sh '''
                    cp -r dist/* /opt/staging/nike/
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'ls -l /opt/staging/nike/'
            }
        }
    }
}
```

---

# **🌎 NGINX Staging Deployment**

Create config:

```bash
sudo nano /etc/nginx/conf.d/nike-staging.conf
```

Paste:

```nginx
server {
    listen 8085;
    server_name _;

    root /opt/staging/nike;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```

Restart nginx:

```bash
sudo systemctl restart nginx
```

Now staging site is live:

```
http://localhost:8085
```

---

# **🔐 Folder Permissions Fix**

Ensure Jenkins agent can write to deployment folder:

```bash
sudo mkdir -p /opt/staging/nike
sudo chown -R jenkins:jenkins /opt/staging
sudo chmod -R 775 /opt/staging
```

---

# **🔁 Final Workflow Summary**

### ✔ Push code to GitHub

→ GitHub webhook notifies Jenkins
→ Jenkins CI job starts
→ React app is built
→ Artifacts archived
→ CD job automatically starts
→ Artifacts downloaded into deployment workspace
→ Files deployed to `/opt/staging/nike/`
→ Nginx instantly serves the updated site at:

```
http://localhost:8085
```

🎉 **Automated CI/CD pipeline working end to end!**

---



