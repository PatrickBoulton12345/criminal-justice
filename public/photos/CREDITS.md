# Photo credits

Photos in this directory are used under their respective licences. Each
file below corresponds to a case `id` in `data/cases.ts`.

For cases without a file here, the app falls back to an LFG-branded
placeholder generated from the case ID and name (see
`components/PhotoPlaceholder.tsx`).

## glitter.jpg

- **Subject:** Paul Gadd performing as Gary Glitter on TopPop, 1974.
- **Source:** Wikimedia Commons.
- **Original file:** `Gary_Glitter_TopPop_1974_5_(3x4_cropped).png`
- **Author:** AVRO (Algemene Vereniging Radio Omroep)
- **Licence:** Creative Commons Attribution-ShareAlike 3.0 Netherlands.
- **URL:** https://commons.wikimedia.org/wiki/File:Gary_Glitter_-_TopPop_1974_5.png

## abedi.jpg

- **Subject:** Manchester Arena exterior — site of the May 2017 bombing.
- **Source:** Wikimedia Commons.
- **Original file:** `Manchester_Arena_exterior,_(2)_May19.jpg`
- **Licence:** Creative Commons Attribution-ShareAlike 4.0 International.
- **URL:** https://commons.wikimedia.org/wiki/File:Manchester_Arena_exterior,_(2)_May19.jpg
- **Note:** This is the venue where the attack took place, not Hashem Abedi himself. No freely-licensed photo of Abedi exists.

## ali-amess.jpg

- **Subject:** Belfairs Methodist Church, Leigh-on-Sea — where Sir David Amess MP was murdered.
- **Source:** Wikimedia Commons.
- **Original file:** `Belfairs_Methodist_Church_cropped.jpg`
- **Licence:** Creative Commons Attribution-ShareAlike 4.0 International.
- **URL:** https://commons.wikimedia.org/wiki/File:Belfairs_Methodist_Church_cropped.jpg
- **Note:** This is the location of the murder, not Ali Harbi Ali himself.

## Cases without a photo

The remaining 22 cases use the LFG-branded placeholder. Wikidata's `P18`
image property and Wikimedia Commons searches were checked for every
case. UK press photos are copyrighted; police custody photos are Crown
copyright and not freely re-distributable; Wikipedia uses some images
under a "fair use" rationale that does not extend to downstream sites
like this one.

To add photos, drop a JPEG into this directory named with the case id
(e.g. `letby.jpg`). The PhotoPlaceholder component will pick it up
automatically. Licensing is your responsibility.
