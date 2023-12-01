"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./content.module.scss";
import SliderBlogTV from "@/common/components/swiper/blog-timviecc";
import OutTroWork247 from "@/common/components/outtro/outtro";
import IntroWork247 from "@/common/components/intro/intro-work";
import TitleTdWork247 from "@/app/render/work247/tuyen-dung/components/title/title";
import {
  extractRecruitmentInfoToEnd,
  extractApplicationDeadline,
  extractApplicationDocsToContactInfo,
  extractBenefitsToApplicationDocs,
  extractContactInfoToRecruitmentInfo,
  extractJobDescription,
  extractRequirementsToBenefits,
} from "../../hooks/handleText";
import { ListJob } from "@/common/constants/list-job.constants";
import Recruitment_1 from "@/common/components/recruitment";
import Requirement from "@/common/components/requirement";
import JobDescription_1 from "@/common/components/jobDescription";
import Deadline from "@/common/components/deadline";
import Contact_1 from "@/common/components/contact";
import Benefits_1 from "@/common/components/benefits";
import Application_2 from "@/common/components/application/Application_2";
import Application_1 from "@/common/components/application/Application_1";
import OutTroTikTok from "@/common/components/outtro/outtro-td";
export default function ContentVideoTdWork({
  title,
  textNew,
  logo,
}: {
  title?: string;
  textNew?: string;
  logo?: string;
}) {
  const [hiddenInTro, setHiddenInTro] = useState(true);
  // const [hiddenOutTro, setHiddenOutTro] = useState(false);
  // const [hiddenTitle, setHiddenTitle] = useState(false);
  // const [step2, setStep2] = useState(false);
  // const [sliderState, setSliderState] = useState<boolean[]>([]);
  // useEffect(() => {
  //     setTimeout(() => {
  //         setHiddenInTro(false);
  //         setHiddenTitle(true);
  //     }, 8000);
  // }, []);
  // useEffect(() => {
  //     setTimeout(() => {
  //         setHiddenOutTro(true);
  //         setStep2(false);
  //     }, 60000 - 7000);
  // }, []);

  const [deadline, setDeadline] = useState<string | null>("");
  const [jobDescription, setJobDescription] = useState<string | null>("");
  const [requirement, setRequirement] = useState<string | null>("");
  const [benefits, setBenefits] = useState<string | null>("");
  const [application, setApplication] = useState<string | null>("");
  const [contact, setContact] = useState<string | null>("");
  const [recruitment, setRecruitment] = useState<string | null>("");
  useEffect(() => {
    if (textNew) {
      setDeadline(extractApplicationDeadline(textNew));
      setJobDescription(extractJobDescription(textNew));
      setRequirement(extractRequirementsToBenefits(textNew));
      setBenefits(extractBenefitsToApplicationDocs(textNew));
      setApplication(extractApplicationDocsToContactInfo(textNew));
      setContact(extractContactInfoToRecruitmentInfo(textNew));
      setRecruitment(extractRecruitmentInfoToEnd(textNew));
    }
  }, [textNew]);

  const [componentIndex, setComponentIndex] = useState(5);
  const DELAY_TIME = 8000;
  // useEffect(() => {
  //     const intervalId = setInterval(() => {
  //         setComponentIndex((prevIndex) => prevIndex + 1);
  //     }, DELAY_TIME);

  //     return () => clearInterval(intervalId);
  // }, []);
  const components = [
    <IntroWork247 key={1} hidden={hiddenInTro} />,
    <TitleTdWork247 key={2} logo={logo} title={title} />,
    <Benefits_1 key={4} title={benefits} />,
    <Application_1 key={3} title={application} />,
    <Recruitment_1 key={5} title={recruitment} />,
    <JobDescription_1 key={6} title={jobDescription} />,
    <Deadline key={7} title={deadline} />,
    <Contact_1 key={8} title={contact} />,
    <OutTroTikTok key={9} hidden={true} />,
  ];

  // const components_1 = [
  //     <IntroWork247 key={1} hidden={hiddenInTro} />,
  //     <TitleTdWork247 key={2} logo={logo} title={title} />,
  //     <Application_2 key={3} title={application} />,
  //     <Benefits key={4} title={benefits} />,
  //     <Contact key={5} title={contact} />,
  //     <Deadline key={6} title={deadline} />,
  //     <JobDescription key={7} title={jobDescription} />,
  //     <Requirement key={8} title={requirement} />,
  //     <Recruitment key={9} title={recruitment} />,
  //     <OutTroWork247 key={10} hidden={hiddenOutTro} />,
  // ];
  const renderedComponent = components[componentIndex] || null;

  return (
    <>
      <div className={styles.content}>{renderedComponent}</div>
    </>
  );
}