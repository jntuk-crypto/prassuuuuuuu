import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FloatingHearts } from "@/components/FloatingHearts";
import { SparkleEffect } from "@/components/SparkleEffect";
import { ConfettiEffect } from "@/components/ConfettiEffect";
import { CuteButton } from "@/components/CuteButton";
import { PhotoCard } from "@/components/PhotoCard";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import catHugging from "@/assets/cat-hugging.png";
import catHappy from "@/assets/cat-happy.png";
import catShy from "@/assets/cat-shy.png";
import catLove from "@/assets/cat-love.png";
import catFinal from "@/assets/cat-final.png";
import myPhoto from "@/assets/my-photo.png";
import photo2 from "@/assets/photo-2.png";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpeg";
import photo5 from "@/assets/photo-5.jpeg";
import photo6 from "@/assets/photo-6.jpg";
import photo7 from "@/assets/photo-7.png";
import photo8 from "@/assets/photo-8.jpg";
import photo9 from "@/assets/photo-9.jpeg";
import photo10 from "@/assets/photo-10.jpeg";
import photo11 from "@/assets/photo-11.png";
import photo12 from "@/assets/photo-12.png";
import photo13 from "@/assets/photo-13.png";
import photo14 from "@/assets/photo-14.png";
import photo15 from "@/assets/photo-15.png";
import photo16 from "@/assets/photo-16.png";
import photo17 from "@/assets/photo-17.png";
import photo18 from "@/assets/photo-18.png";
import photo19 from "@/assets/photo-19.png";
import photo20 from "@/assets/photo-20.png";
import photo21 from "@/assets/photo-21.png";
import romanticMusic from "@/assets/romantic-music.mp3";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prasuuuuuuuuu💕" },
      { name: "description", content: "A cute romantic surprise just for you" },
      { property: "og:title", content: "A Special Surprise for You 💕" },
      { property: "og:description", content: "Someone made something special for you..." },
    ],
  }),
  component: Index,
});

const TOTAL_STEPS = 6;

const photoCaptions = [
  "Where it all started 💫💕",
  "My favorite moment 🌸",
  "You & me 💗",
  "Always smiling with you ✨",
  "Our little world 🩷",
  "She loves teasing me 😆💘",
  "Our adventure begins 🌅",
  "Making memories 🎭",
  "Lost in your eyes 👀",
  "Perfect moments 🌟",
  "Forever starts now 💝",
  "The cute girl😍",
  "Our happy place🥰",
  "Love in the air💖",
  "Perfect together💖",
  "Sweet memories💕",
  "Always and forever💞",
  "Endless love🤍",
  "You, me & the ocean 🌊💗",
  "Falling for that smile every day 😍✨",
  "Lucky to have you 🤍😊",
];

// Photos array - add your photos here as you import them
const photos = [
  myPhoto, // index 0
  photo2, // index 1
  photo3, // index 2
  photo4, // index 3
  photo5, // index 4
  photo6, // index 5
  photo7, // index 6 - added!
  photo8, // index 7 - added!
  photo9, // index 8 - added!
  photo10, // index 9 - added!
  photo11, // index 10 - added!
  photo12, // index 11 - added!
  photo13, // index 12 - add photo-13.jpg
  photo14, // index 13 - add photo-14.jpg
  photo15, // index 14 - add photo-15.jpg
  photo16, // index 15 - add photo-16.jpg
  photo17, // index 16 - add photo-17.jpg
  photo18, // index 17 - add photo-18.jpg
  photo19, // index 18 - placeholder, replace with your next photo import
  photo20, // index 19 - placeholder, replace with your next photo import
  photo21, // index 20 - placeholder, replace with your next photo import
];

function Index() {
  const [step, setStep] = useState(0);
  const [funAnswer, setFunAnswer] = useState(false);
  const [musicFinished, setMusicFinished] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  const shouldPlayMusic = step >= 4 && !musicFinished;

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <ProgressIndicator current={step} total={TOTAL_STEPS} />
      {shouldPlayMusic && (
        <BackgroundMusic
          src={romanticMusic}
          volume={0.8}
          loop={false}
          onEnded={() => setMusicFinished(true)}
        />
      )}

      {/* Persistent background sparkles */}
      <SparkleEffect count={12} />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        {step === 0 && <WelcomePage onNext={next} />}
        {step === 1 && <FirstSurprise onNext={next} />}
        {step === 2 && <SecondSurprise onNext={next} />}
        {step === 3 && (
          <FunInteraction onNext={next} answered={funAnswer} onAnswer={() => setFunAnswer(true)} />
        )}
        {step === 4 && <PhotoCards onNext={next} />}
        {step === 5 && <FinalMessage />}
      </div>
    </div>
  );
}

function WelcomePage({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center text-center animate-fade-up">
      <img
        src={catHugging}
        alt="Cute cat hugging a heart"
        width={220}
        height={220}
        className="animate-float mb-6"
      />
      <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
        Hey cutie 💕
      </h1>
      <p className="mt-3 font-display text-2xl md:text-3xl text-muted-foreground">
        I made something special for you...
      </p>
      <CuteButton onClick={onNext}>Click me 🐾</CuteButton>
    </div>
  );
}

function FirstSurprise({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center text-center animate-fade-up">
      <FloatingHearts count={20} />
      <img
        src={catHappy}
        alt="Happy cute cat"
        width={200}
        height={200}
        loading="lazy"
        className="animate-pop-in mb-6"
      />
      <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground">
        You make my world brighter every day 🌸
      </h1>
      <p className="mt-3 font-body text-lg text-muted-foreground max-w-md">
        Every moment with you feels like a dream I never want to wake up from
      </p>
      <CuteButton onClick={onNext}>Next surprise 👉</CuteButton>
    </div>
  );
}

function SecondSurprise({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center text-center animate-fade-up">
      <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground animate-bounce-soft">
        I have something more for you... 🎀
      </h1>
      <div className="mt-8 flex gap-4 items-end">
        <img
          src={catHappy}
          alt="Happy cat"
          width={120}
          height={120}
          loading="lazy"
          className="animate-pop-in"
          style={{ animationDelay: "0.2s" }}
        />
        <img
          src={catShy}
          alt="Shy cat"
          width={140}
          height={140}
          loading="lazy"
          className="animate-pop-in"
          style={{ animationDelay: "0.5s" }}
        />
        <img
          src={catLove}
          alt="Cat with hearts"
          width={120}
          height={120}
          loading="lazy"
          className="animate-pop-in"
          style={{ animationDelay: "0.8s" }}
        />
      </div>
      <p className="mt-6 font-body text-lg text-muted-foreground max-w-md">
        These little cuties remind me of us 🥰
      </p>
      <CuteButton onClick={onNext}>Keep going 💖</CuteButton>
    </div>
  );
}

function FunInteraction({
  onNext,
  answered,
  onAnswer,
}: {
  onNext: () => void;
  answered: boolean;
  onAnswer: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center animate-fade-up">
      <img
        src={catLove}
        alt="Cat with hearts"
        width={180}
        height={180}
        loading="lazy"
        className="animate-wiggle mb-6"
      />
      {!answered ? (
        <>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Do you love me? 😏
          </h1>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button
              onClick={onAnswer}
              className="rounded-full bg-primary px-8 py-3 font-body text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
            >
              Yes 😍
            </button>
            <button
              onClick={onAnswer}
              className="rounded-full bg-accent px-8 py-3 font-body text-lg font-semibold text-accent-foreground shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
            >
              Of course yes 😘
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground animate-pop-in">
            I knew it 😌❤️
          </h1>
          <p className="mt-3 font-body text-lg text-muted-foreground">
            Was there ever any doubt? 💗
          </p>
          <CuteButton onClick={onNext}>One more thing...</CuteButton>
        </>
      )}
    </div>
  );
}

function PhotoCards({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-4xl">
      <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground animate-fade-up mb-2">
        Our cute moments 💞
      </h1>
      <p
        className="font-body text-muted-foreground mb-8 animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        Every photo tells our story
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {photoCaptions.map((caption, i) => (
          <PhotoCard key={i} index={i} caption={caption} image={photos[i]} />
        ))}
      </div>
      <CuteButton onClick={onNext}>Final surprise 🎁</CuteButton>
    </div>
  );
}

function FinalMessage() {
  return (
    <div className="flex flex-col items-center text-center animate-fade-up">
      <ConfettiEffect />
      <FloatingHearts count={25} />
      <div className="rounded-3xl bg-card p-8 md:p-12 shadow-xl animate-glow-pulse max-w-2xl">
      You are the best thing that ever happened to me ❤️
      <br />
      Happiest Birthday to my prassuuuuu 🎂🤍✨

From being just a normal friend in my B.Tech first year…
to becoming my most special person in my life 💫💖
I honestly didn’t realize when you became such an important part of my life 🥹
<br/>
Nuvvu ekkada unna… ela unna… always happy ga undali 😊🌸
life lo chala success achieve avvali ✨💪
and today on your special day, I just want to say 
you deserve all the happiness in this world 💖🎁
<br/>
Nuvvu na life lo just oka friend kaadu…
sometimes oka amma la untav 🥹💞
tinipistav 🍽️, tidthav 😅, care tiskuntav,
nenu ela undali ani guide chestav…
and honestly cheppali ante 
nannu intha baaga chusukune friend inkevaru undaru 💗
<br/>
Nijam ga cheptunna…
ee 3 years lo nenu change ayya ante,
daniki one of the biggest reasons nuvve💫🤍
You made me better… stronger… happier 😊✨
<br/>
Eppudu ilage strong ga undu 💪💖
life lo deniki bayapadaku…
because I’ll always be there for you🤝✨
<br/>
You are truly the best friend I ever got🥹💗
my cutest best friend 😄💞
<br/>
Manam inka chala memories create cheskovali 📸✨
inka chala navvali 😂💖
inka chala moments share cheskovali 💫
<br/>
Manam chala tiragali 🚗💨, chala enjoy cheyali 😄💖
Nuv ekkada unna parledu… manam antha plan chesi chesedham ok naa 🤍✨
<br/>
Eppudu ilage kottukuntu 😅, tittukuntu 😂, navvukuntu 💞 undali…
adhe mana bonding 🥹💖
<br/>
Malli nuvvu emotional avvaku mummy 🥺🤍
always strong ga undu 💪✨
Once again…
Happy Birthday Prasamma 🤍🎂✨
Stay happy… stay blessed…
life long ilage smile chestu undu 😊💖
<br/>
And finally…
Love you sooo much prasammmaaaaaa 🤍🌸

        <p className="mt-4 font-display text-xl md:text-2xl text-muted-foreground">
          Thank you for being mine.
        </p>
        <p className="mt-2 font-display text-2xl md:text-3xl text-primary font-bold">
          I love you so much 💕
        </p>
      </div>
      <img
        src={catFinal}
        alt="Cute cat waving"
        width={200}
        height={200}
        loading="lazy"
        className="mt-8 animate-float"
      />
    </div>
  );
}
