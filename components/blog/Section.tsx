"use client";
import { useState } from "react";
import ArticlePreview from "./ArticlePreview";
import BlogFilters from "./BlogFilters";
import ExtensionArticle from "./ExtensionArticle";
import IOSArticle from "./IOSArticle";
import AndroidArticle from "./AndroidArticle";
import YoutubeArticle from "./YoutubeArticle";

type FilterOption =
  | "everything"
  | "articles"
  | "extension"
  | "ios"
  | "android"
  | "youtube";

const Section = () => {
  const [filterSelected, setFilterSelected] =
    useState<FilterOption>("everything");

  return (
    <section className="px-6 relative z-10 ">
      <div className="max-w-[850px] mx-auto mt-14 mb-10">
        <BlogFilters
          filterSelected={filterSelected}
          setFilterSelected={setFilterSelected}
        />
      </div>

      <div className="max-w-[800px] mx-auto grid gap-10">
        {filterSelected === "everything" ? (
          <>
            <ArticlePreview
              title={`Chinese Words for "Good Morning"`}
              date="August 26, 2024"
              paragraph="Whether you're traveling abroad, want to make an impression on a Chinese speaker, or simply want to impress your friends, we've got you covered with this detailed breakdown of the main ways to say good morning in Mandarin Chinese. We'll provide you with everything you need to know."
              hrefToArticle="/blog/article/chinese-language-good-morning"
            />
            <ExtensionArticle
              title="Extension Release v1.16.0"
              date="August 23, 2024"
            >
              <ul className=" list-disc pl-5 ml-5 md:text-lg text-migaku-dark-text dark:text-white">
                <li>🔥 YouTube text parsing stability</li>
                <li>Fixed inaccurate/duplicated video title issue</li>
                <li>
                  Only video title, description, and comments are now parsed
                </li>
              </ul>

              <h3 className=" text-migaku-dark-text dark:text-white font-extrabold text-xl md:text-4xl mt-5 mb-3">
                🆕 Translation toolbar
              </h3>
              <ul className="grid gap-2 list-disc pl-5 ml-5 md:text-lg text-migaku-dark-text dark:text-white">
                <li>
                  The Toolbar now has a translation mode, which you can toggle
                  enable with a new button
                </li>
                <li>
                  Translate between your native language and the language you
                  are studying
                  <ul className="grid gap-2 mt-2 list-disc pl-5 ml-5">
                    <li>
                      Respects the &quot;translation output language&quot; found
                      in Card Creator settings
                    </li>
                    <li>
                      Simply type into either input to translate into the other
                      language
                    </li>
                  </ul>
                </li>
                <li>
                  Send popup dictionary source/translation text to the Toolbar,
                  for editing and experimentation
                </li>
                <li>
                  🔥 We also added a Translation tab to the popup dictionary,
                  for one-click sentence translation
                </li>
              </ul>

              <h3 className=" text-migaku-dark-text dark:text-white font-extrabold text-xl md:text-4xl mt-5 mb-3">
                🔧 One-click card creation refinement
              </h3>

              <ul className="grid gap-2 list-disc pl-5 ml-5 md:text-lg text-migaku-dark-text dark:text-white">
                <li>
                  &quot;One click-card creation&quot; is no longer an opt-in
                  setting
                </li>
                <li>
                  Instead, both manual and &quot;one-click&quot; card creation
                  buttons will always be available
                  <ul className="grid gap-2 mt-2 list-disc pl-5 ml-5">
                    <li>
                      Manual card creation: You&apos;re taken to the Card
                      Creator so you can curate/edit things exactly how you like
                      them
                    </li>
                    <li>
                      ⚡ &quot;One-click&quot;: Cards are created automatically
                      and will skip the Card Creator
                    </li>
                  </ul>
                </li>

                <li>
                  Hotkeys also reflect this change:
                  <ul className="grid gap-2 mt-2 list-disc pl-5 ml-5">
                    <li>Use E whenever you want to create cards manually</li>
                    <li>
                      Use Q whenever for &quot;one-click&quot; card creation
                    </li>
                  </ul>
                </li>

                <li>
                  FYI the behavior of the E hotkey has changed a little, as this
                  has been a source of confusion
                  <ul className="grid gap-2 mt-2 list-disc pl-5 ml-5">
                    <li>
                      Both hotkeys now send distinct card payloads to the Card
                      Creator (instead of combining)
                    </li>
                    <li>
                      Now it is possible to &quot;queue&quot; up manual cards
                      from text websites
                    </li>
                    <li>
                      To &quot;combine&quot; words into 2T+ cards, open up words
                      main dictionary and using the &quot;Add+&quot; buttons
                    </li>
                  </ul>
                </li>
              </ul>

              <h3 className=" text-migaku-dark-text dark:text-white font-extrabold text-xl md:text-4xl mt-5 mb-3">
                🧑‍🔧 Other enhancements
              </h3>

              <ul className="grid gap-2 list-disc pl-5 ml-5 md:text-lg text-migaku-dark-text dark:text-white">
                <li>
                  🔥 Settings: choose which dictionary tab to open by default:
                  e.g. audio, images, translation, etc.
                </li>
                <li>
                  Dashboard tweaks; added course/guides links, and a quick way
                  to add Known Words
                </li>
                <li>
                  Card Creator: if there is an error during generation,
                  automatic card creation is cancelled
                </li>
              </ul>

              <h3 className=" text-migaku-dark-text dark:text-white font-extrabold text-xl md:text-4xl mt-5 mb-3">
                👨‍💻 Dev update
              </h3>
              <p className=" font-medium text-migaku-dark-text dark:text-white md:text-lg">
                YouTube is one of our most used sites, and now runs much more
                smoothly. We&apos;ve also added some powerful new translation
                features: check out the new &quot;Toolbar Translator&quot;, and
                the &quot;Translate&quot; tab in the popup dictionary. You can
                also configure which dictionary tab is open-by-default in
                Settings, which pairs nicely with these features! 💪
              </p>
            </ExtensionArticle>

            <IOSArticle
              date="December 22, 2023"
              title="iOS App Release v1.2.27"
            >
              <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
                ⏫ Popup Dictionary enhancement
              </h3>
              <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
                Dictionary is now enriched with media tabs. Use the media tabs
                to send your favorite audio, images, and example sentences
                directly to the Card Creator.
              </p>

              <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
                🆕 Clipboard
              </h3>
              <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
                With the Clipboard, you can parse and interact with text in a
                way similar to the Chrome extension. Edit the Clipboard content
                with just one touch using the paste and clear buttons. Toggle
                between &apos;read&apos; and &apos;edit&apos; mode to see your
                parsed content, or adjust the source text. Content will also be
                persisted between sessions on a per language basis. Your known
                word count at the top of the page will accurately reflect any
                learning status adjustments you make in the Clipboard.
              </p>

              <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
                🚀 Improved parser performance
              </h3>
              <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
                We&apos;ve fine-tuned the parsers to use fewer resources and
                work even faster than before.
              </p>

              <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
                🔩 And maaaaany more small fixes and enhancements. Stay tuned
                for much more in the weeks and months to come!
              </p>
            </IOSArticle>

            <AndroidArticle
              date="January 19, 2024"
              title="Android App Release v1.12.0
"
            >
              <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
                📋 Clipboard
              </h3>
              <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
                Introducing the Clipboard, mirroring the capabilities of our
                Chrome extension. Easily Copy and paste text into our Clipboard
                to read, look up words, and create cards. Easily edit Clipboard
                contents with the new paste button. Switch between
                &apos;read&apos; and &apos;edit&apos; modes to either view
                parsed content or modify the text. Plus, your text is
                automatically persisted across sessions.
              </p>

              <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
                🔍 Popup dictionary in Migaku Memory
              </h3>
              <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
                Tap the target word + or sentence on the back of the card and
                look up word definitions while studying. The ability to look up
                words while you are editing your card is coming soon ✨
              </p>

              <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
                📝 Create cards from the app
              </h3>
              <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
                Manually create new cards on-the-go right from the mobile app
                ⌨️. This first version is a simple version as you will need to
                copy and paste your own content into the fields, however, this
                feature will expand further in the near future.
              </p>

              <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
                🤖 Google TTS and DeepL in Card Creator
              </h3>
              <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
                When manually creating cards, you can auto-generate sentence
                audio (Google TTS) and sentence translations text (DeepL) for
                target sentences! This will be available soon when editing
                cards.
              </p>

              <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
                🛜 Offline feature on/off toggle
              </h3>
              <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
                You can now choose to enable/disable media download. When
                enabled, images and audio will store locally onto your device
                for a seamless offline study experience. For those concerned
                about disk space, you can disable this and to reclaim your
                storage back.
              </p>

              <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
                🔧 Numerous Minor Tweaks and Improvements
              </h3>
              <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
                We&apos;ve made several small adjustments and fixes to enhance
                your app experience. Exciting new updates are on the horizon, so
                stay tuned!
              </p>
            </AndroidArticle>

            <YoutubeArticle
              thumnaildSrc="/yamatokotoba.jpeg"
              href="/blog/youtube/the-japanese-counting-system-youve-never-heard-about"
              date="August 14, 2024"
              title="The Japanese Counting System You've Never Heard About"
              paragraph="If you have ever wondered why words like 八百屋 or 二十歳 are pronounced the way they are, we have the answer for you!"
            />

            <YoutubeArticle
              thumnaildSrc="/animeYoutubeVideo.jpeg"
              href="/blog/youtube/the-toolbar-on-video-sites-migaku-browser-extension"
              date="August 12, 2024"
              title="The Toolbar on Video Sites | Migaku Browser Extension"
              paragraph="In this video we will talk about all functions of the Migaku toolbar on video sites."
            />
          </>
        ) : filterSelected === "articles" ? (
          <ArticlePreview
            title={`Chinese Words for "Good Morning"`}
            date="August 26, 2024"
            paragraph="Whether you're traveling abroad, want to make an impression on a Chinese speaker, or simply want to impress your friends, we've got you covered with this detailed breakdown of the main ways to say good morning in Mandarin Chinese. We'll provide you with everything you need to know."
            hrefToArticle="/blog/article/chinese-language-good-morning"
          />
        ) : filterSelected === "extension" ? (
          <ExtensionArticle
            title="Extension Release v1.16.0"
            date="August 23, 2024"
          >
            <ul className=" list-disc pl-5 ml-5 md:text-lg text-migaku-dark-text dark:text-white">
              <li>🔥 YouTube text parsing stability</li>
              <li>Fixed inaccurate/duplicated video title issue</li>
              <li>
                Only video title, description, and comments are now parsed
              </li>
            </ul>

            <h3 className=" text-migaku-dark-text dark:text-white font-extrabold text-xl md:text-4xl mt-5 mb-3">
              🆕 Translation toolbar
            </h3>
            <ul className="grid gap-2 list-disc pl-5 ml-5 md:text-lg text-migaku-dark-text dark:text-white">
              <li>
                The Toolbar now has a translation mode, which you can toggle
                enable with a new button
              </li>
              <li>
                Translate between your native language and the language you are
                studying
                <ul className="grid gap-2 mt-2 list-disc pl-5 ml-5">
                  <li>
                    Respects the &quot;translation output language&quot; found
                    in Card Creator settings
                  </li>
                  <li>
                    Simply type into either input to translate into the other
                    language
                  </li>
                </ul>
              </li>
              <li>
                Send popup dictionary source/translation text to the Toolbar,
                for editing and experimentation
              </li>
              <li>
                🔥 We also added a Translation tab to the popup dictionary, for
                one-click sentence translation
              </li>
            </ul>

            <h3 className=" text-migaku-dark-text dark:text-white font-extrabold text-xl md:text-4xl mt-5 mb-3">
              🔧 One-click card creation refinement
            </h3>

            <ul className="grid gap-2 list-disc pl-5 ml-5 md:text-lg text-migaku-dark-text dark:text-white">
              <li>
                &quot;One click-card creation&quot; is no longer an opt-in
                setting
              </li>
              <li>
                Instead, both manual and &quot;one-click&quot; card creation
                buttons will always be available
                <ul className="grid gap-2 mt-2 list-disc pl-5 ml-5">
                  <li>
                    Manual card creation: You&apos;re taken to the Card Creator
                    so you can curate/edit things exactly how you like them
                  </li>
                  <li>
                    ⚡ &quot;One-click&quot;: Cards are created automatically
                    and will skip the Card Creator
                  </li>
                </ul>
              </li>

              <li>
                Hotkeys also reflect this change:
                <ul className="grid gap-2 mt-2 list-disc pl-5 ml-5">
                  <li>Use E whenever you want to create cards manually</li>
                  <li>
                    Use Q whenever for &quot;one-click&quot; card creation
                  </li>
                </ul>
              </li>

              <li>
                FYI the behavior of the E hotkey has changed a little, as this
                has been a source of confusion
                <ul className="grid gap-2 mt-2 list-disc pl-5 ml-5">
                  <li>
                    Both hotkeys now send distinct card payloads to the Card
                    Creator (instead of combining)
                  </li>
                  <li>
                    Now it is possible to &quot;queue&quot; up manual cards from
                    text websites
                  </li>
                  <li>
                    To &quot;combine&quot; words into 2T+ cards, open up words
                    main dictionary and using the &quot;Add+&quot; buttons
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className=" text-migaku-dark-text dark:text-white font-extrabold text-xl md:text-4xl mt-5 mb-3">
              🧑‍🔧 Other enhancements
            </h3>

            <ul className="grid gap-2 list-disc pl-5 ml-5 md:text-lg text-migaku-dark-text dark:text-white">
              <li>
                🔥 Settings: choose which dictionary tab to open by default:
                e.g. audio, images, translation, etc.
              </li>
              <li>
                Dashboard tweaks; added course/guides links, and a quick way to
                add Known Words
              </li>
              <li>
                Card Creator: if there is an error during generation, automatic
                card creation is cancelled
              </li>
            </ul>

            <h3 className=" text-migaku-dark-text dark:text-white font-extrabold text-xl md:text-4xl mt-5 mb-3">
              👨‍💻 Dev update
            </h3>
            <p className=" font-medium text-migaku-dark-text dark:text-white md:text-lg">
              YouTube is one of our most used sites, and now runs much more
              smoothly. We&apos;ve also added some powerful new translation
              features: check out the new &quot;Toolbar Translator&quot;, and
              the &quot;Translate&quot; tab in the popup dictionary. You can
              also configure which dictionary tab is open-by-default in
              Settings, which pairs nicely with these features! 💪
            </p>
          </ExtensionArticle>
        ) : filterSelected === "ios" ? (
          <IOSArticle date="December 22, 2023" title="iOS App Release v1.2.27">
            <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
              ⏫ Popup Dictionary enhancement
            </h3>
            <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
              Dictionary is now enriched with media tabs. Use the media tabs to
              send your favorite audio, images, and example sentences directly
              to the Card Creator.
            </p>

            <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
              🆕 Clipboard
            </h3>
            <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
              With the Clipboard, you can parse and interact with text in a way
              similar to the Chrome extension. Edit the Clipboard content with
              just one touch using the paste and clear buttons. Toggle between
              &apos;read&apos; and &apos;edit&apos; mode to see your parsed
              content, or adjust the source text. Content will also be persisted
              between sessions on a per language basis. Your known word count at
              the top of the page will accurately reflect any learning status
              adjustments you make in the Clipboard.
            </p>

            <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
              🚀 Improved parser performance
            </h3>
            <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
              We&apos;ve fine-tuned the parsers to use fewer resources and work
              even faster than before.
            </p>

            <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
              🔩 And maaaaany more small fixes and enhancements. Stay tuned for
              much more in the weeks and months to come!
            </p>
          </IOSArticle>
        ) : filterSelected === "android" ? (
          <AndroidArticle
            date="January 19, 2024"
            title="Android App Release v1.12.0
"
          >
            <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
              📋 Clipboard
            </h3>
            <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
              Introducing the Clipboard, mirroring the capabilities of our
              Chrome extension. Easily Copy and paste text into our Clipboard to
              read, look up words, and create cards. Easily edit Clipboard
              contents with the new paste button. Switch between
              &apos;read&apos; and &apos;edit&apos; modes to either view parsed
              content or modify the text. Plus, your text is automatically
              persisted across sessions.
            </p>

            <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
              🔍 Popup dictionary in Migaku Memory
            </h3>
            <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
              Tap the target word + or sentence on the back of the card and look
              up word definitions while studying. The ability to look up words
              while you are editing your card is coming soon ✨
            </p>

            <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
              📝 Create cards from the app
            </h3>
            <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
              Manually create new cards on-the-go right from the mobile app ⌨️.
              This first version is a simple version as you will need to copy
              and paste your own content into the fields, however, this feature
              will expand further in the near future.
            </p>

            <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
              🤖 Google TTS and DeepL in Card Creator
            </h3>
            <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
              When manually creating cards, you can auto-generate sentence audio
              (Google TTS) and sentence translations text (DeepL) for target
              sentences! This will be available soon when editing cards.
            </p>

            <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
              🛜 Offline feature on/off toggle
            </h3>
            <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
              You can now choose to enable/disable media download. When enabled,
              images and audio will store locally onto your device for a
              seamless offline study experience. For those concerned about disk
              space, you can disable this and to reclaim your storage back.
            </p>

            <h3 className="font-extrabold text-xl lg:text-2xl text-migaku-dark-text dark:text-white">
              🔧 Numerous Minor Tweaks and Improvements
            </h3>
            <p className="font-medium text-migaku-dark-text dark:text-white md:text-lg mt-3 mb-5">
              We&apos;ve made several small adjustments and fixes to enhance
              your app experience. Exciting new updates are on the horizon, so
              stay tuned!
            </p>
          </AndroidArticle>
        ) : filterSelected === "youtube" ? (
          <>
            <YoutubeArticle
              thumnaildSrc="/yamatokotoba.jpeg"
              href="/blog/youtube/the-japanese-counting-system-youve-never-heard-about"
              date="August 14, 2024"
              title="The Japanese Counting System You've Never Heard About"
              paragraph="If you have ever wondered why words like 八百屋 or 二十歳 are pronounced the way they are, we have the answer for you!"
            />

            <YoutubeArticle
              thumnaildSrc="/animeYoutubeVideo.jpeg"
              href="/blog/youtube/the-toolbar-on-video-sites-migaku-browser-extension"
              date="August 12, 2024"
              title="The Toolbar on Video Sites | Migaku Browser Extension"
              paragraph="In this video we will talk about all functions of the Migaku toolbar on video sites."
            />
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Section;
