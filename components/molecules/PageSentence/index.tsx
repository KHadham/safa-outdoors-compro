import Text from "components/atoms/Text";
import Image from "next/image";
import React from "react";
interface SectionSentenceProps {
  badge?: string;
  title?: string;
  description?: string;
  badgeStyle?: "success" | "error";
  withImage?: boolean;
}
const PageSentence = ({
  title = "",
  description = "",
  badge = "",
  badgeStyle = "success",
  withImage = false,
}: SectionSentenceProps) => {
  return (
    <article className={`space-y-6`}>
      {title == "" && badge == "" ? (
        ""
      ) : (
        <div className="space-y-1">
          {badge == "" ? (
            ""
          ) : (
            <Text
              value={badge}
              textStyle={
                badgeStyle == "success" ? "SectionBadge" : "SectionBadgeError"
              }
            />
          )}
          {title == "" ? "" : <Text value={title} textStyle="PageTitle" />}
        </div>
      )}
      {withImage ? (
        <a
          className="flex justify-center items-center"
          href="https://www.instagram.com/jangan_dirumahaja/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/images/brand/Jandira.png"}
            width={200}
            height={200}
            alt="logo"
          />
        </a>
      ) : (
        ""
      )}
      {description == "" ? (
        ""
      ) : (
        <Text value={description} textStyle="PageDescription" />
      )}
    </article>
  );
};

export default PageSentence;
