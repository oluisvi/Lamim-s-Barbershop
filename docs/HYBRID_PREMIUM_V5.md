# Lamim's Hybrid Premium V5

## Merge rule

This version deliberately uses **BARBEARIA_LAMIMS_VERCEL_FIX_COMPLETE** as the structural/content baseline and imports the strongest presentation/mechanics from **VISUAL_QA_V4_FULL**.

### Preserved from FIX COMPLETE
- Business/content data and all informational surfaces.
- Entry composition and copy.
- Header brand, sound, menu, booking and navigation destinations.
- Services, team, story, reviews, location and real-environment gallery content.
- Accessible `/info` route, SEO, fallback, analytics, audio and demo provenance.
- Closing conversion concept: “Agora só falta você.”

### Adopted from QA V4
- Scroll/swipe-only spatial navigation; down advances, up reverses.
- Centripetal Catmull-Rom camera path sampled by arc length.
- Forward-facing tangent orientation and single-layer damping.
- No WASD, arrows, drag-look, joystick or movement buttons.
- UI-only entry handoff: the camera begins inside the shop and the entry content lifts away.
- Brighter, richer procedural 3D environment and adaptive performance tiers.
- Dark premium shell + warm ivory content surfaces for stronger readability.
- Fixed, scroll-safe menu/drawer overlays.
- Non-blocking end-of-tour conversion sheet over the live 3D scene.

## Visual identity

The hybrid identity is intentionally two-tone:
- **Experience shell:** charcoal / espresso / near-black with warm cream typography and restrained bronze accents.
- **Content surfaces:** warm ivory / stone / walnut / cognac, with dark text and high contrast.
- **3D environment:** brighter architectural lighting and material separation so geometry reads without losing the premium mood.

## Interaction contract

- Desktop/tablet: mouse wheel or trackpad scroll controls the camera path.
- Mobile: vertical swipe/scroll controls the same path.
- Scroll direction is reversible at all times except while a menu or information drawer is open.
- Opening overlays freezes the journey at its exact current position; closing resumes from the same position.
- Reaching the end never locks page scrolling; scrolling upward dismisses the completion state and reverses the journey.

## Reference synthesis

Art direction is additionally filtered through the project reference set documented in `docs/REFERENCE_DIRECTION.md`: Casa Aurora/home-3d, ERA Residence, LPAS, Senawa Studio and Studio Foundry. The implementation borrows principles—spatial storytelling, material warmth, editorial asymmetry, image scale, typographic restraint and scroll-as-narrative—not their layouts.
