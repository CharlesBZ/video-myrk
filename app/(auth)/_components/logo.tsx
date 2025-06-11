import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div >
        <Image
          src="/myrk.jpg"
          alt="Myrk Logo"
          width={80}
          height={80}
          className={cn("rounded-full", font.className)}
        />
      </div>
      <div className={cn(
        "flex flex-col items-center",
        font.className
        )}>
        <p className="text-xl font-semibold">
          Myrk
        </p>
        <p className="text-sm text-muted-foreground">
          Let&apos;s Play!
        </p>
      </div>
    </div>
  );
}