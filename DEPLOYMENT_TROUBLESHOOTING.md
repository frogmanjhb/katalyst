# Deployment Troubleshooting Guide

## Common Issues and Solutions

### ❌ "Workflow not running"
**Solution:**
1. Check that you've pushed to the `main` branch
2. Go to GitHub → Actions tab to see if workflow is triggering
3. Ensure workflow file is in `.github/workflows/` directory

### ❌ "FTP connection failed"
**Possible causes:**
- Wrong FTP server address
- Incorrect username/password
- FTP port blocked (try port 21 or 22)

**Solution:**
1. Double-check your FTP credentials in GitHub Secrets
2. Test FTP connection manually with FileZilla
3. Try different FTP server formats:
   - `ftp.yourdomain.co.za`
   - `yourdomain.co.za`
   - `yourdomain.co.za:21` (with port)

### ❌ "Files uploaded but website not showing"
**Possible causes:**
- Wrong server directory path
- Files in wrong location
- DNS not pointing to server

**Solution:**
1. Check the `server-dir` in `.github/workflows/deploy.yml`
   - Try: `./public_html/` (relative)
   - Try: `/public_html/` (absolute)
   - Try: `/www/` or `/htdocs/` (other common paths)
2. Log into your hosting control panel and check:
   - Where your current website files are located
   - What the web root directory is called
3. Update the `server-dir` in the workflow file accordingly

### ❌ "Permission denied" errors
**Solution:**
- Contact Absolute Hosting support to verify FTP account has write permissions
- Ensure FTP account has access to the web root directory

### ✅ Testing Deployment Manually

1. **Check GitHub Actions Logs:**
   - Go to your repo → Actions tab
   - Click on the latest workflow run
   - Check each step for errors

2. **Verify Secrets:**
   - Repository → Settings → Secrets and variables → Actions
   - Ensure `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` are all set

3. **Test FTP Connection:**
   - Use FileZilla or similar FTP client
   - Connect using same credentials as GitHub Secrets
   - Note the exact path you need to navigate to see your files
   - Use that exact path in `server-dir`

4. **Common Server Directory Paths:**
   - `/public_html/` - Most common
   - `/www/` - Alternative
   - `/htdocs/` - Some hosts
   - `./public_html/` - Relative path
   - Just `/` - Root directory (if FTP connects directly to web root)

### Quick Fix: Try Different Server Directory Paths

Edit `.github/workflows/deploy.yml` line 24 and try these one at a time:

```yaml
server-dir: ./public_html/    # Relative path
server-dir: /public_html/     # Absolute path
server-dir: /www/             # Alternative web root
server-dir: ./www/            # Relative alternative
server-dir: /                 # Root directory
```

After each change, commit and push to trigger a new deployment.

### Still Not Working?

1. **Contact Absolute Hosting Support** and ask:
   - What is the FTP server address?
   - What is the web root directory path?
   - Are there any special FTP requirements?

2. **Check GitHub Actions logs** for specific error messages

3. **Enable dry-run mode** to test without uploading:
   - Set `dry-run: true` in workflow
   - This will test the connection without uploading files

