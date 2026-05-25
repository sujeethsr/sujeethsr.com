import React from "react";
import Image from "next/image";
import personalInfo from "@/data/personal-info.json";

interface ProfileImageProps {
  size: "small" | "large";
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  size,
  className = "",
}) => {
  // Define size variants — passport-style (portrait rectangle, taller than wide)
const sizeClasses = {
  small: "w-40 h-52 md:w-56 md:h-72", // Mobile/Tablet sizes
  large: "w-80 h-[28rem]", // Desktop size — bigger passport photo
};

  return (
    <div className={`relative ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-2xl bg-slate-700 overflow-hidden glass-card p-2`}
      >
        <Image
          src={personalInfo.personal.profileImage}
          alt="Sujeeth S R - AI Engineer"
          width={320}
          height={400}
          className="w-full h-full object-cover rounded-xl scale-110"
          priority
        />
      </div>
      {/* Glowing border accents */}
      <div className="absolute -inset-2 rounded-2xl border-2 border-primary/20 pointer-events-none"></div>
      <div className="absolute -inset-4 rounded-2xl border border-accent/10 pointer-events-none"></div>
    </div>
  );
};

export default ProfileImage;