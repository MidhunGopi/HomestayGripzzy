# Beginner's Guide: Hosting on Hostinger or GoDaddy

This guide will help you deploy your Gripzy Serene Abode website to **Hostinger** or **GoDaddy**, even if you're completely new to web hosting.

---

## Prerequisites

Before you start, make sure you have:
- [ ] A hosting account (Hostinger or GoDaddy)
- [ ] Your website files built and ready
- [ ] FTP credentials from your hosting provider
- [ ] FileZilla (free FTP client) installed on your computer

---

## Step 1: Build Your Website Files

First, you need to create the production-ready files:

1. **Open PowerShell** (search for "PowerShell" in Windows)
2. **Navigate to your project folder**:
   ```powershell
   cd C:\Users\midhu\Downloads\Gripzzy
   ```
3. **Build the website**:
   ```powershell
   npm run build
   ```
4. **Wait for it to complete** - you'll see a `dist` folder created with all your website files

The `dist` folder now contains everything you need to upload!

---

## Step 2: Get Your FTP Credentials

### For Hostinger:
1. Log in to your Hostinger account
2. Go to **"Hosting"** → Select your hosting plan
3. Click **"Files"** → **"FTP Accounts"**
4. Create an FTP account or use the default one
5. Note down:
   - **FTP Hostname** (usually ftp.yourdomain.com)
   - **FTP Username** (usually starts with u)
   - **FTP Password**
   - **FTP Port** (usually 21)

### For GoDaddy:
1. Log in to your GoDaddy account
2. Go to **"My Products"** → **"Web Hosting"**
3. Click **"Manage"** next to your hosting
4. Scroll to **"FTP"** section
5. Click **"Create FTP User"** or view existing credentials
6. Note down:
   - **FTP Hostname** (usually ftp.yourdomain.com)
   - **FTP Username**
   - **FTP Password**
   - **FTP Port** (usually 21)

---

## Step 3: Download and Install FileZilla (Free FTP Client)

1. Go to https://filezilla-project.org/download.php
2. Download **FileZilla Client** (NOT Server)
3. Install it on your computer
4. Open FileZilla

---

## Step 4: Connect to Your Hosting Server

1. **Open FileZilla**
2. At the top, you'll see four boxes:
   - **Host**: Enter your FTP Hostname (e.g., ftp.yourdomain.com)
   - **Username**: Enter your FTP Username
   - **Password**: Enter your FTP Password
   - **Port**: Enter 21 (or the port your host provided)
3. Click **"Quickconnect"**
4. If you see a certificate warning, click **"OK"** or **"Trust"**

You should now be connected! You'll see:
- **Left side**: Your computer files
- **Right side**: Your web server files

---

## Step 5: Upload Your Website Files

### Important: Find the Right Upload Location

You need to upload to the **public_html** or **public** folder:

- **Hostinger**: Look for `public_html` folder on the right side
- **GoDaddy**: Look for `public_html` or `html` folder on the right side

### Upload Process:

1. **On the RIGHT side** (server): Double-click `public_html` to open it
2. **Delete any existing files** in `public_html` (like default index.html)
   - Right-click files → Delete
3. **On the LEFT side** (your computer): Navigate to `C:\Users\midhu\Downloads\Gripzzy\dist`
4. **Select ALL files inside the `dist` folder** (press Ctrl+A)
5. **Right-click** and choose **"Upload"**
6. **Wait for upload to complete** (you'll see a progress bar at the bottom)

**IMPORTANT**: Upload the **contents** of the `dist` folder, NOT the `dist` folder itself!

Your server should now have files like:
```
public_html/
  ├── index.html
  ├── assets/
  │   ├── index-xxxxx.css
  │   └── index-xxxxx.js
  └── (other files)
```

---

## Step 6: Configure Your Domain (If Needed)

### If you have a custom domain:

**For Hostinger:**
1. Go to **Hosting** → **Manage**
2. Find **"Domain"** section
3. Make sure your domain points to this hosting account

**For GoDaddy:**
1. Go to **"My Products"** → **"Domains"**
2. Click **"DNS"** next to your domain
3. Make sure the A record points to your hosting IP address

### If using a subdomain provided by hosting:
- Your site will be available at something like: `yourname.hostingersite.com` or `yourname.godaddysites.com`

---

## Step 7: Test Your Website

1. Open your web browser
2. Go to your domain (e.g., www.yourdomain.com)
3. Your website should now be live! 🎉

If you don't see your site:
- Wait 5-10 minutes (sometimes takes time to propagate)
- Clear your browser cache (Ctrl+Shift+Delete)
- Try a different browser or incognito mode

---

## Common Issues and Solutions

### Issue: "Index of /" or blank page appears
**Solution**: Make sure you uploaded files to `public_html` folder, not inside a subfolder

### Issue: Images not loading
**Solution**: Make sure you uploaded the `assets` folder along with `index.html`

### Issue: CSS/styling not working
**Solution**: 
1. Check that all files from `dist` folder were uploaded
2. Clear your browser cache
3. Re-upload the entire `dist` folder contents

### Issue: Can't connect via FTP
**Solution**:
1. Double-check your FTP credentials
2. Try using Port 21 instead of 22
3. Contact your hosting provider's support

---

## Making Updates to Your Website

When you want to update your website:

1. Make changes to your project files locally
2. Run `npm run build` again in PowerShell
3. Connect to FTP via FileZilla
4. Delete old files in `public_html`
5. Upload new files from the `dist` folder
6. Refresh your website to see changes

---

## Alternative: Using cPanel (Easier Method)

Both Hostinger and GoDaddy offer **cPanel** (web-based control panel):

### Using File Manager in cPanel:

1. Log in to your hosting control panel (cPanel)
2. Find **"File Manager"** and click it
3. Navigate to `public_html` folder
4. Click **"Upload"** button at the top
5. Click **"Select File"** and choose all files from your `dist` folder
6. Wait for upload to complete
7. Your site is now live!

**This method is often easier than FTP for beginners!**

---

## Need Help?

### Contact Support:
- **Hostinger Support**: Available 24/7 via live chat
- **GoDaddy Support**: Call (480) 505-8877 or use live chat

### Useful Resources:
- Hostinger Help Center: https://support.hostinger.com
- GoDaddy Help Center: https://www.godaddy.com/help

### Video Tutorials:
- Search YouTube for: "How to upload website to Hostinger"
- Search YouTube for: "How to upload website to GoDaddy using FileZilla"

---

## Security Tips

1. **Keep your FTP password secure** - don't share it
2. **Use HTTPS** - Most hosting providers offer free SSL certificates
   - In Hostinger: Go to SSL → Install free SSL
   - In GoDaddy: Go to SSL Certificates → Install
3. **Regular backups** - Download a copy of your site files regularly

---

## Cost Considerations

- **Hostinger**: Starting from $2-3/month (single website)
- **GoDaddy**: Starting from $5-10/month (single website)
- Both offer free SSL certificates
- No additional costs for static websites like yours

---

**Congratulations!** 🎉 Your website should now be live on the internet!

If you have any questions, don't hesitate to contact your hosting provider's support team - they're there to help beginners like you!
