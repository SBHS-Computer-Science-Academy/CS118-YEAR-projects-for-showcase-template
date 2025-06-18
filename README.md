# CS118-YEAR-projects-for-showcase-template
put link to site here after publishing it on GitHub pages

To embed the Google slides in presentation mode, you need to use the presentation mode embed URL.

## How to Get the Presentation-Mode Embed URL for Google Slides

To embed Google Slides in presentation mode so viewers can click through the slides, follow these steps:

1. **Open your Google Slides presentation.**
2. Click **File > Share > Publish to the web**.
3. In the dialog, select the **Embed** tab.
4. Choose your desired auto-advance timing, or uncheck auto-advance if you want manual control.
5. Click **Publish**, then confirm if prompted.
6. Copy the embed iframe code, or just copy the URL inside the `src` attribute of the iframe.

The embed URL will look like this:
https://docs.google.com/presentation/d/SLIDE_ID/embed?start=true&loop=false&delayms=3000

**Parameter meanings:**
- `start=true` — starts presentation mode immediately.
- `loop=false` — disables looping.
- `delayms=3000` — auto-advance delay in milliseconds (optional; remove or adjust as needed).

