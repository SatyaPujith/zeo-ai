# Zeo.ai Deployment Guide

## Environment Variables Setup

### Required Variables

The application requires two D-ID credentials to function properly:

```env
VITE_DID_CLIENT_KEY=ck_N5juQRcRyzzFD0bYiDTjL
VITE_DID_AGENT_ID=v2_agt_epcSRxQ1
```

### Local Development

1. Copy `.env.example` to `.env`
2. Add your D-ID credentials
3. Run `npm run dev`

### Vercel Deployment

**Step 1: Add Environment Variables**

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - **Name**: `VITE_DID_CLIENT_KEY`  
     **Value**: `ck_N5juQRcRyzzFD0bYiDTjL`
   - **Name**: `VITE_DID_AGENT_ID`  
     **Value**: `v2_agt_epcSRxQ1`
4. Select **Production**, **Preview**, and **Development** environments
5. Click **Save**

**Step 2: Whitelist Domain in D-ID**

This is **CRITICAL** - the D-ID agent will not load without domain whitelisting:

1. Go to [studio.d-id.com](https://studio.d-id.com/)
2. Log in with your D-ID account
3. Navigate to your agent settings
4. Find **Allowed Domains** or **Whitelisted Domains** section
5. Add the following domains:
   - `https://zeoai.vercel.app` (your production domain)
   - `https://*.vercel.app` (for preview deployments)
   - `http://localhost:5173` (optional, for local testing)
6. Save the changes

**Step 3: Deploy**

```bash
# Push to GitHub
git add .
git commit -m "Add D-ID integration with env variables"
git push origin main

# Or deploy directly
vercel --prod
```

**Step 4: Verify Deployment**

1. Visit your deployed site: `https://zeoai.vercel.app`
2. Open browser console (F12)
3. Look for D-ID script load messages
4. The video agent should appear in the hero section center box

## Troubleshooting

### White Box Appearing

**Cause**: Domain not whitelisted in D-ID dashboard

**Solution**: 
1. Check D-ID dashboard allowed domains
2. Ensure `https://zeoai.vercel.app` is added
3. Wait 1-2 minutes for changes to propagate
4. Clear browser cache and reload

### Agent Not Loading Locally

**Cause**: D-ID restricts local testing by default

**Solution**: 
- Add `http://localhost:5173` to D-ID allowed domains
- Or test only on deployed domain

### Environment Variables Not Working

**Cause**: Variables not properly set in Vercel

**Solution**:
1. Check Vercel dashboard → Settings → Environment Variables
2. Ensure variable names start with `VITE_` prefix
3. Redeploy after adding variables

### Console Errors

Check browser console for:
- `D-ID script loaded successfully` ✅ (script loaded)
- `D-ID agent script initialized` ✅ (credentials found)
- `Failed to load D-ID agent` ❌ (network/permission issue)
- `D-ID credentials not found` ❌ (env variables missing)

## Technical Implementation

The D-ID agent is loaded dynamically in "fabio" mode (floating widget):

1. **Environment Variables**: Stored in `.env` (local) and Vercel dashboard (production)
2. **Dynamic Script Loading**: `src/utils/loadDIDAgent.ts` creates and injects the script
3. **React Integration**: HeroSection component calls `loadDIDAgent()` on mount
4. **Fabio Mode**: Agent appears as a floating widget on the right side of the screen
5. **Open Mode**: Set to "expanded" to show the agent interface by default
6. **Position**: Right side, horizontal orientation for better UX

## Security Notes

- Never commit `.env` file to Git (already in `.gitignore`)
- D-ID credentials are public client keys (safe to expose in frontend)
- Always use environment variables, never hardcode credentials
- Keep `.env.example` updated with variable names (not values)

## Support

If issues persist:
1. Check D-ID dashboard for API status
2. Verify domain whitelisting is correct
3. Check browser console for detailed error messages
4. Contact D-ID support for agent-specific issues
