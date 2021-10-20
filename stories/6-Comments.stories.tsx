import {
  faBellSlash,
  faMapPin,
  faPaintBrush,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../src/buttons/Button";
//import { linkTo } from "@storybook/addon-links";
import Comment from "../src/post/Comment";
import CommentChain from "../src/post/CommentChain";
import React from "react";
import { action } from "@storybook/addon-actions";
import crown from "./images/crown.png";
import mamoruAvatar from "./images/mamoru.png";
import reindeerEars from "./images/reindeer-ears.png";
import tuxedoAvatar from "./images/tuxedo-mask.jpg";
import wreath from "./images/wreath.png";

export default {
  title: "Comments",
  component: Comment,
};

export const NonEditable = () => (
  <>
    <div style={{}}>
      <Comment
        id="comment"
        initialText={
          '[{"insert":"This card has a really long word: JugemuJugemuGokonoSurikireKaijarisuigyonoSuigyomatsuUnraimatsuFuraimatsuKuNeruTokoroniSumuTokoroYaburaKojinoBuraKojiPaipopaipoPaiponoShuringanShuringannoGurindaiGurindainoPonpokopinoPonpokonanoChokyumeinoChosuke."}]'
        }
        secretIdentity={{ name: "Tuxedo Mask", avatar: `/${tuxedoAvatar}` }}
        userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
      />
    </div>

    <div style={{ width: "250px" }}>
      <Comment
        id="comment"
        initialText={
          '[{"insert":"This card has a really long word: JugemuJugemuGokonoSurikireKaijarisuigyonoSuigyomatsuUnraimatsuFuraimatsuKuNeruTokoroniSumuTokoroYaburaKojinoBuraKojiPaipopaipoPaiponoShuringanShuringannoGurindaiGurindainoPonpokopinoPonpokonanoChokyumeinoChosuke."}]'
        }
        secretIdentity={{ name: "Tuxedo Mask", avatar: `/${tuxedoAvatar}` }}
        userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
      />
    </div>
    <div style={{ width: "500" }}>
      <Comment
        id="comment"
        initialText={
          '[{"insert":{"block-image":{"src":"https://media.tenor.com/images/2d4aeafd88c82922635b972e454c07d3/tenor.gif","spoilers":false,"width":320,"height":176}}},{"insert":""}]'
        }
        secretIdentity={{ name: "Tuxedo Mask", avatar: `/${tuxedoAvatar}` }}
        userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
        onExtraAction={action("extra")}
      />
    </div>
    <div style={{ width: "320px" }}>
      <Comment
        id="comment"
        initialText={
          '[{"insert":{"block-image":{"src":"https://media.tenor.com/images/2d4aeafd88c82922635b972e454c07d3/tenor.gif","spoilers":false,"width":320,"height":176}}},{"insert":""}]'
        }
        secretIdentity={{ name: "Tuxedo Mask", avatar: `/${tuxedoAvatar}` }}
        userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
        onExtraAction={action("extra")}
      />
    </div>
  </>
);

NonEditable.story = {
  name: "non editable",
};

export const Highlight = () => {
  const commentRef = React.createRef<any>();
  return (
    <>
      <div style={{}}>
        <Comment
          ref={commentRef}
          id="comment"
          initialText={
            '[{"insert":"This card has a really long word: JugemuJugemuGokonoSurikireKaijarisuigyonoSuigyomatsuUnraimatsuFuraimatsuKuNeruTokoroniSumuTokoroYaburaKojinoBuraKojiPaipopaipoPaiponoShuringanShuringannoGurindaiGurindainoPonpokopinoPonpokonanoChokyumeinoChosuke."}]'
          }
          secretIdentity={{ name: "Tuxedo Mask", avatar: `/${tuxedoAvatar}` }}
          userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
          onExtraAction={action("extra")}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button onClick={() => commentRef.current.highlight("red")}>
          Highlight!
        </Button>
      </div>
    </>
  );
};

Highlight.story = {
  name: "highlight",
};

export const CommentChainStory = () => {
  const commentRef1 = React.createRef<any>();
  const commentRef2 = React.createRef<any>();

  const highlight = () => {
    commentRef1.current.highlight("red");
    commentRef2.current.highlight("red");
  };
  return (
    <>
      <CommentChain
        ref={commentRef1}
        comments={[
          {
            id: "1",
            text:
              '[{"insert": "I mean, sure, but you know what also is great?"}]',
          },
          {
            id: "1",
            text:
              '[{"attributes": {"inline-spoilers": true}, "insert": "Deze nuts."}]',
          },
          {
            id: "1",
            text: '[{"insert": "Wait is that how you type it?"}]',
          },
        ]}
        secretIdentity={{
          name: "Tuxedo Mask",
          avatar: `/${tuxedoAvatar}`,
        }}
        userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
      />
      <div style={{ width: "320px" }}>
        <CommentChain
          ref={commentRef2}
          comments={[
            {
              id: "1",
              text:
                '[{"insert": "I\'m a man of simple taste. I see half an ankle and go:"}]',
            },
            {
              id: "1",
              text:
                '[{"insert":{"block-image":{"src":"https://media.tenor.com/images/2d4aeafd88c82922635b972e454c07d3/tenor.gif","spoilers":false,"width":320,"height":176}}},{"insert":""}]',
            },
          ]}
          secretIdentity={{
            name: "Tuxedo Mask",
            avatar: `/${tuxedoAvatar}`,
            color: "red",
            accessory: crown,
          }}
          userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
          onExtraAction={action("extra")}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button onClick={highlight}>Highlight!</Button>
      </div>
    </>
  );
};
CommentChainStory.story = {
  name: "chained",
};

export const CommentChainAccessoryStory = () => {
  const [currentAccessory, setCurrentAccessory] = React.useState<
    string | undefined
  >(reindeerEars);
  return (
    <>
      <CommentChain
        comments={[
          {
            id: "1",
            text:
              '[{"insert": "I mean, sure, but you know what also is great?"}]',
          },
          {
            id: "1",
            text:
              '[{"attributes": {"inline-spoilers": true}, "insert": "Deze nuts."}]',
          },
          {
            id: "1",
            text: '[{"insert": "Wait is that how you type it?"}]',
          },
        ]}
        secretIdentity={{
          name: "Tuxedo Mask",
          avatar: `/${tuxedoAvatar}`,
          accessory: currentAccessory,
        }}
        userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
      />
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setCurrentAccessory(undefined)}>None</button>
        <button onClick={() => setCurrentAccessory(reindeerEars)}>
          Reindeer
        </button>
        <button onClick={() => setCurrentAccessory(wreath)}>Wreath</button>
      </div>
    </>
  );
};
CommentChainAccessoryStory.story = {
  name: "accessory",
};

export const ExtraActionStory = () => {
  return (
    <>
      <div>
        <CommentChain
          comments={[
            {
              id: "1",
              text:
                '[{"insert": "I mean, sure, but you know what also is great?"}]',
            },
            {
              id: "1",
              text:
                '[{"attributes": {"inline-spoilers": true}, "insert": "Deze nuts."}]',
            },
            {
              id: "1",
              text: '[{"insert": "Wait is that how you type it?"}]',
            },
          ]}
          secretIdentity={{
            name: "Tuxedo Mask",
            avatar: `/${tuxedoAvatar}`,
          }}
          userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
          onExtraAction={() => {}}
        />
      </div>
      <div>
        <Comment
          id="comment"
          initialText={
            '[{"insert":"This card has a really long word: JugemuJugemuGokonoSurikireKaijarisuigyonoSuigyomatsuUnraimatsuFuraimatsuKuNeruTokoroniSumuTokoroYaburaKojinoBuraKojiPaipopaipoPaiponoShuringanShuringannoGurindaiGurindainoPonpokopinoPonpokonanoChokyumeinoChosuke."}]'
          }
          secretIdentity={{ name: "Tuxedo Mask", avatar: `/${tuxedoAvatar}` }}
          userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
          onExtraAction={() => {}}
        />
      </div>
    </>
  );
};
ExtraActionStory.story = {
  name: "extra action",
};

export const WithOptionsStory = () => {
  return (
    <>
      <CommentChain
        comments={[
          {
            id: "1",
            text:
              '[{"insert": "I mean, sure, but you know what also is great?"}]',
          },
          {
            id: "1",
            text:
              '[{"attributes": {"inline-spoilers": true}, "insert": "Deze nuts."}]',
          },
          {
            id: "1",
            text: '[{"insert": "Wait is that how you type it?"}]',
          },
        ]}
        secretIdentity={{
          name: "Tuxedo Mask",
          avatar: `/${tuxedoAvatar}`,
        }}
        userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
        createdTime="69 days ago."
        onExtraAction={() => {}}
        options={[
          {
            name: "Pin board",
            icon: faMapPin,
            link: {
              onClick: action("noHrefClick"),
            },
          },
          {
            name: "Mute board",
            icon: faVolumeMute,
            link: {
              onClick: action("noHrefClick"),
            },
          },
          {
            name: "Dismiss notifications",
            icon: faBellSlash,
            link: {
              onClick: action("noHrefClick"),
            },
          },
          {
            name: "Customize Summary",
            icon: faPaintBrush,
            link: {
              onClick: action("noHrefClick"),
            },
          },
        ]}
      />
    </>
  );
};
WithOptionsStory.story = {
  name: "with options",
};

export const CommentImageStory = () => {
  const commentRef = React.createRef<any>();
  return (
    <>
      <CommentChain
        ref={commentRef}
        comments={[
          {
            id: "1",
            text:
              '[{"insert": "I mean, sure, but you know what also is great?"}]',
          },
          {
            id: "1",
            text:
              '[{"insert":{"block-image":"https://cdn.discordapp.com/attachments/443967088118333442/691486081895628830/unknown.png"}}]',
          },
          {
            id: "1",
            text:
              '[{"insert":{"block-image":"https://cdn.discordapp.com/attachments/443967088118333442/691486081895628830/unknown.png"}}, {"insert": "Wait is that how you type it?"}]',
          },
        ]}
        secretIdentity={{
          name: "Tuxedo Mask",
          avatar: `/${tuxedoAvatar}`,
        }}
        userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
      />
      <div style={{ marginTop: "20px" }}>
        <Button onClick={() => commentRef.current.highlight("red")}>
          Highlight!
        </Button>
      </div>
    </>
  );
};
CommentImageStory.story = {
  name: "image",
};

export const Badges = () => {
  return (
    <div style={{ paddingTop: "15px" }}>
      <CommentChain
        comments={[
          {
            id: "1",
            text:
              '[{"insert": "I mean, sure, but you know what also is great?"}]',
          },
          {
            id: "1",
            text:
              '[{"attributes": {"inline-spoilers": true}, "insert": "Deze nuts."}]',
          },
          {
            id: "1",
            text: '[{"insert": "Wait is that how you type it?"}]',
          },
        ]}
        new={true}
        op={true}
        createdTime="tomorrow"
        secretIdentity={{
          name: "Tuxedo Mask",
          avatar: `/${tuxedoAvatar}`,
        }}
        userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
      />
    </div>
  );
};
