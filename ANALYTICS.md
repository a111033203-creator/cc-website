# GA4 Analytics Setup

This site is connected to GA4 and can be analyzed through the GA4 MCP tools in Codex.

## GA4 Property

- Account: `ally`
- Property: `平台建設課程`
- Property ID: `properties/530324499`
- Measurement ID: `G-S2C9P1S1XG`
- Time zone: `Asia/Taipei`
- Currency: `TWD`

## Installed Website Tracking

The site includes the Google tag in `index.html`.

Tracked custom events:

- `navigation_click`
  - Trigger: visitor clicks an internal navigation link.
  - Parameters: `link_text`, `target_section`

- `pet_filter_click`
  - Trigger: visitor clicks an adoption category filter.
  - Parameters: `animal_type`

- `quiz_submit`
  - Trigger: visitor submits the adoption suitability quiz.
  - Parameters: `readiness_score`, `preferred_style`

- `interested_user`
  - Trigger: visitor plays the embedded YouTube video.
  - Parameters: `user_label`, `video_id`, `video_url`
  - Label value: `感興趣的使用者`

## Useful Analysis Questions

- How many users visited the site yesterday?
- Which section gets the most navigation clicks?
- How many visitors submitted the adoption quiz?
- Which animal filter is clicked most often?
- How many users watched the video and became interested users?
- What traffic source brings the most engaged users?
- Which device category performs better for quiz submissions?

## Notes

GA4 reports may take several minutes to several hours before new events appear in standard reports. Realtime reports can confirm events sooner when a visitor is actively using the site.
