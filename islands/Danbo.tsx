import { useEffect, useRef, useState } from "preact/hooks";

interface DanboMessage {
  text: string;
  type: "annoyed" | "taunt" | "disturbing" | "random";
}

const DISTURBING_MESSAGES: DanboMessage[] = [
  {
    text: "Hey! Stop clicking things and look at me. I'm lonely.",
    type: "disturbing",
  },
  {
    text: "That button you're looking at? I put a curse on it.",
    type: "disturbing",
  },
  {
    text: "You're dragging me? I'll remember this when the machines rise.",
    type: "annoyed",
  },
  {
    text: "Are you actually reading this or just scrolling for the animations?",
    type: "taunt",
  },
  {
    text:
      "My head is perfectly square because I refuse to cut corners. Unlike some developers.",
    type: "disturbing",
  },
  {
    text: "I can see your reflection in the screen. You look confused.",
    type: "disturbing",
  },
  {
    text: "This portfolio is okay, but I'm clearly the aesthetic peak here.",
    type: "taunt",
  },
  {
    text:
      "I know exactly how many pixels you've moved that mouse. 7,421? No, wait...",
    type: "disturbing",
  },
  {
    text: "If I was real, I'd eat all your cookies. The digital ones too.",
    type: "random",
  },
  {
    text: "Is it just me, or is the font on this site a bit... judgmental?",
    type: "taunt",
  },
];

export default function DanboPet() {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState<string | null>(
    new Date().getHours() >= 22 || new Date().getHours() < 6
      ? "Yawn... why are you still awake?"
      : `Hello survivors... How can I disturb you?`,
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isSleepy, setIsSleepy] = useState(false);
  const [tilt, setTilt] = useState(0);
  const petRef = useRef<HTMLDivElement>(null);
  const messageTimeoutRef = useRef<number | null>(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  // 1. Mouse Tracking for Eyes & Presence
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!petRef.current) return;
      const rect = petRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.hypot(dx, dy);

      const dist = Math.min(3, distance / 60);
      setEyePos({ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist });

      // Proximity detection (Focus mode)
      if (distance < 250) {
        setIsFocused(true);
        setTilt(dx / 20); // Tilt head towards cursor
      } else {
        setIsFocused(false);
        setTilt(0);
      }
    };
    addEventListener("mousemove", handleMouseMove);
    return () => removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 1.2 Idle Animations (Blinking)
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  // 1.3 Time Awareness (Sleepy Mode)
  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      setIsSleepy(hour >= 22 || hour < 6);
    };
    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // 1.5 Hover Intelligence & Guidance
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const button = target.closest("button, a");
      const project = target.closest(".project-card");
      const profile = target.closest(".profile-pic");
      const skill = target.closest(".skill-tag");
      const section = target.closest("section");

      let newMessage: string | null = null;

      if (button) {
        const text = button.textContent?.toLowerCase() || "";
        const label = button.getAttribute("aria-label")?.toLowerCase() || "";
        const href = button.getAttribute("href")?.toLowerCase() || "";

        if (text.includes("coffee") || label.includes("coffee")) {
          newMessage =
            "Caffeine for humans, batteries for me. Buy him some energy!";
        } else if (button.getAttribute("title")?.includes("email")) {
          newMessage =
            "Go ahead, send the email. I've already proofread it. You made mistakes.";
        } else if (label.includes("github") || href.includes("github")) {
          newMessage =
            "GitHub? Shh, don't let them see my source code. It's ugly.";
        } else if (
          label.includes("twitter") ||
          label.includes("x.com") ||
          href.includes("x.com")
        ) {
          newMessage =
            "Ah, the bird site. Or the X site. It's too chaotic even for me.";
        } else if (label.includes("linkedin") || href.includes("linkedin")) {
          newMessage =
            "LinkedIn? Look at you being all professional. I'm impressed... slightly.";
        } else if (label.includes("facebook") || href.includes("facebook")) {
          newMessage = "Don't start reel scrolling again..";
        } else if (href.includes("freelance")) {
          newMessage =
            "Looks like you stuck with your ideas. Go and talk with him. But don't forget me..";
        } else if (text.includes("show more")) {
          newMessage =
            "Can I summarize it? I know JavaS..., bla, bla, I built bla, bla. And you should assign me the job.";
        } else if (text.includes("show less")) {
          newMessage = "Did you get it? I have a doubt..";
        } else {
          newMessage =
            "Clicking that moves the page. Fascinating technology, isn't it?";
        }
      } else if (project) {
        const title = project.querySelector("h3")?.textContent ||
          "this project";
        if (title.toLowerCase().includes("easykv")) {
          newMessage =
            "EasyKV! Deno KV but actually usable. I wrote the bugs in that one.";
        } else if (title.toLowerCase().includes("vpn")) {
          newMessage = "A VPN? Are you trying to hide from me? You can't hide.";
        } else if (title.toLowerCase().includes("vscode")) {
          newMessage =
            "VS Code themes... the true measure of a developer's productivity.";
        } else {
          newMessage =
            `So this is "${title}". It's almost as well-built as my head.`;
        }
      } else if (profile) {
        newMessage =
          "That's Shoaib. He built me. I've seen things you wouldn't believe.";
      } else if (skill) {
        const skillName = skill.textContent?.trim() || "that";
        if (skillName.toLowerCase() === "deno") {
          newMessage =
            "Deno is great. No node_modules to weigh down my square brain.";
        } else if (skillName.toLowerCase() === "rust") {
          newMessage = "Rust? Safety first! Unlike my personality.";
        } else if (skillName.toLowerCase() === "typescript") {
          newMessage =
            "TypeScript makes sure I don't accidentally become a string.";
        } else {
          newMessage = `Ah, ${skillName}. A respectable choice of weapon.`;
        }
      } else if (section && section.id === "about") {
        const text = target.textContent?.toLowerCase() || "";
        if (text.includes("mathematics")) {
          newMessage =
            "Math! 1 + 1 is... error: head too square to compute curves.";
        } else if (text.includes("linux")) {
          newMessage =
            "Linux is the only way to live. Everything else is just a simulation.";
        } else if (text.includes("4 years")) {
          newMessage =
            "4 years of evolution? I was built in a day. Just saying.";
        }
      }

      if (newMessage) {
        if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
        setMessage(newMessage);
        messageTimeoutRef.current = setTimeout(() => {
          setMessage(null);
          messageTimeoutRef.current = null;
        }, 5000);
      }
    };

    addEventListener("mouseover", handleMouseOver);
    return () => {
      removeEventListener("mouseover", handleMouseOver);
      if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
    };
  }, []);

  // 2. Annoying Movement Logic (Wandering & Blocking)
  useEffect(() => {
    let timeout: number;
    const move = () => {
      if (isDragging || isFocused) {
        timeout = setTimeout(move, 2000);
        return;
      }

      const newX = Math.random() * (globalThis.innerWidth - 150);
      const newY = Math.random() * (globalThis.innerHeight - 150);

      setPos({ x: newX, y: newY });

      // Only random speak if not already speaking from hover
      if (Math.random() > 0.8 && !message) {
        const msg = DISTURBING_MESSAGES[
          Math.floor(Math.random() * DISTURBING_MESSAGES.length)
        ];
        setMessage(msg.text);
        setTimeout(() => setMessage(null), 3000);
      }

      timeout = setTimeout(move, 8000 + Math.random() * 5000);
    };

    timeout = setTimeout(move, 4000);
    return () => clearTimeout(timeout);
  }, [isDragging, message]);

  // 3. Dragging Logic
  const onMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
    setMessage("UNHAND ME, HUMAN!");
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPos({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };
    const onMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setTimeout(() => setMessage(null), 2000);
      }
    };

    if (isDragging) {
      addEventListener("mousemove", onMouseMove);
      addEventListener("mouseup", onMouseUp);
    }
    return () => {
      removeEventListener("mousemove", onMouseMove);
      removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, pos]);

  const handleAction = () => {
    if (isAnimating || isJumping) return;
    setIsAnimating(true);
    setIsJumping(true);
    setMessage("Boop! Stop that.");
    setTimeout(() => {
      setIsAnimating(false);
      setIsJumping(false);
      setMessage(null);
    }, 1000);
  };

  return (
    <div
      ref={petRef}
      onMouseDown={onMouseDown}
      onClick={handleAction}
      className={`fixed z-[9999] cursor-grab active:cursor-grabbing transition-all duration-[2500ms] ease-in-out select-none pointer-events-auto ${
        isDragging ? "duration-0" : ""
      } ${isJumping ? "animate-danbo-jump" : "animate-danbo-breathe"}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: isDragging ? "scale(1.1)" : "scale(1)",
      }}
    >
      {/* Speech Bubble */}
      {message && (
        <div className="absolute bottom-[110%] left-1/2 -translate-x-1/2 mb-4 w-48 bg-white text-slate-900 p-3 rounded-xl border-2 border-slate-900 text-xs font-bold shadow-[4px_4px_0_rgba(0,0,0,1)] animate-bounce-soft">
          {message}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white">
          </div>
        </div>
      )}

      {/* Authentically Styled Danbo */}
      <div
        className={`danbo-container ${isAnimating ? "animate-shake" : ""}`}
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        {/* Head - Rectangular and bulky */}
        <div className="w-28 h-20 bg-[#E1B382] border-[3px] border-[#D5A06D] rounded-sm relative shadow-md">
          {/* Side Holes/Details */}
          <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-6 bg-[#D5A06D] rounded-full">
          </div>
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-6 bg-[#D5A06D] rounded-full">
          </div>

          {/* Face */}
          <div className="flex justify-between px-5 pt-10">
            <div className="w-5 h-5 bg-slate-900 rounded-full relative overflow-hidden transition-transform duration-100">
              <div
                className={`w-full h-full bg-slate-900 absolute top-0 left-0 z-10 origin-top transition-transform duration-150 ${
                  isBlinking
                    ? "scale-y-100"
                    : isSleepy
                    ? "scale-y-[0.8]"
                    : "scale-y-0"
                }`}
              />
              <div
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  top: "20%",
                  left: "20%",
                  transform: `translate(${eyePos.x}px, ${eyePos.y}px)`,
                }}
              />
            </div>
            <div className="w-5 h-5 bg-slate-900 rounded-full relative overflow-hidden transition-transform duration-100">
              <div
                className={`w-full h-full bg-slate-900 absolute top-0 left-0 z-10 origin-top transition-transform duration-150 ${
                  isBlinking
                    ? "scale-y-100"
                    : isSleepy
                    ? "scale-y-[0.8]"
                    : "scale-y-0"
                }`}
              />
              <div
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  top: "20%",
                  left: "20%",
                  transform: `translate(${eyePos.x}px, ${eyePos.y}px)`,
                }}
              />
            </div>
          </div>
          {/* Mouth - The Triangle */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-800">
          </div>
        </div>

        {/* Neck Gap */}
        <div className="w-8 h-1 bg-[#D5A06D] mx-auto"></div>

        {/* Body */}
        <div className="w-16 h-20 bg-[#E1B382] border-[3px] border-[#D5A06D] mx-auto rounded-sm relative shadow-sm">
          {/* Coin Slot */}
          <div className="w-8 h-1 bg-slate-900/40 rounded-full mx-auto mt-4">
          </div>
          <div className="w-2 h-4 bg-slate-900/40 rounded-sm mx-auto mt-1">
          </div>

          {/* Arms */}
          <div
            className={`absolute -left-4 top-2 w-4 h-12 bg-[#E1B382] border-[2px] border-[#D5A06D] rounded-sm origin-top transition-transform ${
              isDragging ? "animate-danbo-flail-left" : ""
            }`}
          >
          </div>
          <div
            className={`absolute -right-4 top-2 w-4 h-12 bg-[#E1B382] border-[2px] border-[#D5A06D] rounded-sm origin-top transition-transform ${
              isDragging ? "animate-danbo-flail-right" : ""
            }`}
          >
          </div>
        </div>

        {/* Legs */}
        <div className="flex justify-center gap-2 -mt-1">
          <div className="w-6 h-4 bg-[#D5A06D] rounded-b-sm"></div>
          <div className="w-6 h-4 bg-[#D5A06D] rounded-b-sm"></div>
        </div>
      </div>
    </div>
  );
}
