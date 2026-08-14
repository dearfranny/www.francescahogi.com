# Email capture setup (newsletter + Serendipity Playbook)

The Sign up forms on the site (homepage, Work with me, and the Serendipity
Playbook opt-in on For Brands) now submit to your own site instead of sending
people to a Google Sheet. Visitors never see the sheet — they just get a
"Thanks, you're on the list!" message. Their email gets written into your
sheet automatically in the background.

For that background part to work, you need to give your site permission to
write to the sheet. That's a one-time, ~10 minute setup. Nothing here costs
money — this uses Google's standard free API.

## What you're building
A "service account" is basically a robot Google user that only your website
knows the password to. You'll create one, then share your spreadsheet with
it the same way you'd share it with a person.

## Steps

1. **Go to** https://console.cloud.google.com/ and sign in with the Google
   account that owns the spreadsheet.

2. **Create a project** (top left dropdown → New Project). Call it something
   like "francescahogi-site". Takes a few seconds.

3. **Enable the Google Sheets API.** With your new project selected, go to
   "APIs & Services" → "Library", search "Google Sheets API", click it, then
   click **Enable**.

4. **Create a service account.** Go to "APIs & Services" → "Credentials" →
   "Create Credentials" → "Service account". Name it anything (e.g.
   "sheets-writer"). Click through the rest with defaults, then **Done**.

5. **Create a key for it.** Click into the service account you just made →
   "Keys" tab → "Add Key" → "Create new key" → choose **JSON** → Create.
   A file downloads. Keep it safe, don't share it publicly (don't post it in
   Slack, email, etc. — treat it like a password).

6. **Copy two values out of that JSON file:**
   - `client_email` — looks like `sheets-writer@your-project.iam.gserviceaccount.com`
   - `private_key` — a long string starting with `-----BEGIN PRIVATE KEY-----`

   **Instead of copy-pasting the private key directly, encode it first.** Pasting a
   long multi-line key through a web form (like Vercel's environment variable
   box) very often corrupts it — line breaks get collapsed or altered, and the
   key stops working with a cryptic error. To avoid that entirely, convert it
   to one plain unbroken line first:

   Open Terminal, go to the folder where the JSON file downloaded (usually
   `cd ~/Downloads`), then run (replacing `YOUR-FILE-NAME.json` with the
   actual filename):

   ```
   node -e "const k=require('./YOUR-FILE-NAME.json'); console.log('CLIENT EMAIL:'); console.log(k.client_email); console.log(''); console.log('PRIVATE KEY (base64):'); console.log(Buffer.from(k.private_key).toString('base64'))"
   ```

   This prints the client email plus a long single-line base64 string. Copy
   that base64 string exactly — it's one continuous line with no special
   characters, so it can't get mangled by pasting.

7. **Share your Google Sheet with that robot email.** Open your sheet
   (the one at the link you gave me), click **Share**, paste in the
   `client_email` from step 6, give it **Editor** access, send.

8. **Add three environment variables in Vercel.** In your Vercel project:
   Settings → Environment Variables. Add:

   | Name | Value |
   |---|---|
   | `GOOGLE_SHEETS_CLIENT_EMAIL` | the `client_email` from step 6 |
   | `GOOGLE_SHEETS_PRIVATE_KEY_B64` | the base64 string from step 6 |
   | `GOOGLE_SHEET_ID` | `1Q9CdaOVxWTnFQZZbFsziBgjh9ZlMilSgZv8IrGwwnis` (this is already the ID from the sheet link you sent me) |

   Redeploy after adding these (Vercel usually prompts you to).

   (There's also a `GOOGLE_SHEETS_PRIVATE_KEY` variable the code accepts as a
   fallback, for the raw key pasted directly — but use the `_B64` version
   above, it's much more reliable.)

9. **Check your sheet's tab name.** By default the code writes to a tab
   called `Sheet1`. If your tab is named something else (check the tab at
   the bottom of the spreadsheet), add a fourth environment variable:
   `GOOGLE_SHEETS_TAB_NAME` set to whatever that tab is actually called.

That's it. Once deployed, each signup writes a row: timestamp, email,
and which form it came from (`newsletter` or `serendipity-playbook`), so
you can tell them apart in the same sheet.

## Testing locally
If you want to test this on your own computer before deploying, create a
file called `.env.local` in the project folder (same level as
`package.json`) with the same three (or four) variables, e.g.:

```
GOOGLE_SHEETS_CLIENT_EMAIL=sheets-writer@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1Q9CdaOVxWTnFQZZbFsziBgjh9ZlMilSgZv8IrGwwnis
```

Then `npm run dev` and try signing up on the site. Never commit
`.env.local` to GitHub — it's already covered by `.gitignore`.

## Until this is set up
The forms will still show a working "Sign up" box on the site, but
submissions will silently fail to save (you'll see an error in Vercel's
logs, not visible to visitors — though visitors will see the "something
went wrong, email me directly" message after a few seconds). Set this up
before you rely on it to actually collect emails.
