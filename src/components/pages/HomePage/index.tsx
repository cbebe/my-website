import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { useMemo } from "react";
import { HeaderSection } from "../../basics/HeaderSection";
import HomepageFeatures from "./HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const lastResumeUpdate = useMemo(() => {
    const lastUpdate = new Date(siteConfig.customFields.lastResumeUpdate as string);
    const [, month, date, year] = lastUpdate.toDateString().split(" ");
    return `${month} ${date} ${year}`;
  }, [siteConfig.customFields.lastResumeUpdate]);

  return (
    <HeaderSection title="Hi, I'm Charles!" subtitle={siteConfig.tagline}>
      <div className="centre-content">
        <a className="button button--secondary button--lg" href="/Resume.pdf">
          Resume - Last Updated {lastResumeUpdate}
        </a>
      </div>
    </HeaderSection>
  );
}

export function Home(): JSX.Element {
  return (
    <Layout title="Hello!" description="Charles Ancheta's Personal Website">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}