export default function Home() {
  return (
    <>
      {/* ── 왼쪽 사이드바 ── */}
      <aside className="lg:w-1/3 xl:w-1/4 bg-primary text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden shrink-0">
        {/* 데코 블러 원 */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black opacity-5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-sm font-bold tracking-wider uppercase mb-8 opacity-90 border-b border-white/20 pb-2 inline-block">
            The Solution
          </h2>
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
            A digital platform that allows Mid-Level donors to understand their
            impact through human-centred stories
          </h1>
          <div className="text-base lg:text-lg opacity-90 leading-relaxed font-light space-y-4">
            <p>
              <strong className="font-bold">&apos;Stories of Impact&apos;</strong> is a
              digital platform that offers Mid-Level donors{" "}
              <strong className="font-bold border-b border-white/40">
                exclusive access
              </strong>{" "}
              to information on UNICEF&apos;s programs.
            </p>
            <p>
              Through{" "}
              <strong className="font-bold">candid, real-time updates</strong>,
              and leveraging AI, we extend our understanding of donor interest
              and motivation.
            </p>
          </div>
        </div>

        <div className="mt-12 lg:mt-24 relative z-10">
          <div className="flex flex-col items-start">
            <span className="text-2xl font-black lowercase tracking-tight">
              unicef
            </span>
            <span className="text-xs font-medium tracking-wide">
              for every child
            </span>
          </div>
        </div>
      </aside>

      {/* ── 메인 콘텐츠 ── */}
      <main className="lg:w-2/3 xl:w-3/4 p-6 lg:p-12 overflow-y-auto">
        {/* 섹션 1: 피처 카드 */}
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold mb-10 text-text-light dark:text-white">
            &ldquo;Stories of Impact&rdquo; meets Mid-Level Donor needs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 카드 1 – 맞춤형 콘텐츠 */}
            <article className="flex flex-col h-full">
              <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 mb-6 flex items-center justify-center aspect-[4/3] group relative overflow-hidden border border-border-light dark:border-border-dark">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-32 h-64 bg-black rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                  <div className="bg-gray-100 w-full h-full flex flex-col relative">
                    <div className="bg-primary h-4 w-full" />
                    <div className="p-2 space-y-2">
                      <div className="h-2 w-16 bg-gray-300 rounded" />
                      <div className="w-full h-32 bg-blue-100 rounded-lg relative overflow-hidden">
                        <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-ping" />
                        <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full" />
                        <div className="absolute bottom-8 right-8 w-2 h-2 bg-primary rounded-full" />
                        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary/50 rounded-full" />
                      </div>
                      <div className="h-8 bg-gray-800 rounded-lg mt-auto mx-auto w-3/4 flex items-center justify-center">
                        <div className="w-16 h-1 bg-gray-600 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4 leading-relaxed">
                The platform offers access to tailored content, allowing donors
                to connect with UNICEF work, its staff, and the causes they are
                most passionate about.
              </p>
              <div className="mt-auto">
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-2 uppercase tracking-wider font-semibold">
                  Link to macro-drivers:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-medium bg-primary/5 dark:bg-primary/10">
                    Intimate &amp; trusted relationship
                  </span>
                  <span className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-medium bg-primary/5 dark:bg-primary/10">
                    Give strategically
                  </span>
                  <span className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-medium bg-primary/5 dark:bg-primary/10">
                    Sense of ownership
                  </span>
                </div>
              </div>
            </article>

            {/* 카드 2 – 다양한 채널 */}
            <article className="flex flex-col h-full">
              <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 mb-6 flex items-center justify-center aspect-[4/3] group relative overflow-hidden border border-border-light dark:border-border-dark">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 [&>*:not(:first-child)]:-ml-5">
                  <div className="w-20 h-40 bg-gray-800 rounded-xl border-2 border-gray-700 shadow-lg z-10 scale-90 opacity-80">
                    <div className="bg-white w-full h-full rounded-lg overflow-hidden p-1">
                      <div className="w-full h-full bg-gray-100 flex flex-col justify-center items-center">
                        <span className="material-icons text-primary text-xl">
                          podcasts
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-24 h-48 bg-black rounded-2xl border-2 border-gray-800 shadow-xl z-20">
                    <div className="bg-white w-full h-full rounded-xl overflow-hidden flex flex-col">
                      <div className="h-20 bg-blue-50 flex items-center justify-center">
                        <span className="material-icons text-primary text-3xl">
                          play_circle
                        </span>
                      </div>
                      <div className="p-2 space-y-1">
                        <div className="h-1 w-full bg-gray-200 rounded" />
                        <div className="h-1 w-2/3 bg-gray-200 rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="w-20 h-40 bg-gray-800 rounded-xl border-2 border-gray-700 shadow-lg z-10 scale-90 opacity-80">
                    <div className="bg-white w-full h-full rounded-lg overflow-hidden p-1">
                      <div className="w-full h-full bg-gray-100 flex flex-col justify-center items-center">
                        <span className="material-icons text-primary text-xl">
                          event
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4 leading-relaxed">
                Through diverse content channels (podcast, broadcast, events),
                donors can learn about the impact of their contributions, while
                also connecting with other donors.
              </p>
              <div className="mt-auto">
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-2 uppercase tracking-wider font-semibold">
                  Link to macro-drivers:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-medium bg-primary/5 dark:bg-primary/10">
                    Trust contributions
                  </span>
                  <span className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-medium bg-primary/5 dark:bg-primary/10">
                    Community
                  </span>
                  <span className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-medium bg-primary/5 dark:bg-primary/10">
                    Tangible results
                  </span>
                </div>
              </div>
            </article>

            {/* 카드 3 – AI 챗봇 */}
            <article className="flex flex-col h-full">
              <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 mb-6 flex items-center justify-center aspect-[4/3] group relative overflow-hidden border border-border-light dark:border-border-dark">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-32 h-64 bg-black rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                  <div className="bg-white w-full h-full flex flex-col items-center pt-8 px-2 relative">
                    <div className="absolute top-0 w-full h-12 bg-primary/10" />
                    <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mt-4">
                      <span className="material-icons text-primary text-3xl">
                        smart_toy
                      </span>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg rounded-tl-none self-start text-[8px] text-gray-600 mb-2 max-w-[80%]">
                      Hello! Ask me about your impact.
                    </div>
                    <div className="bg-primary text-white p-2 rounded-lg rounded-tr-none self-end text-[8px] max-w-[80%]">
                      How is my donation helping in Yemen?
                    </div>
                    <div className="mt-auto w-full pb-4">
                      <div className="h-8 bg-black rounded-full mx-2 flex items-center justify-center">
                        <span className="text-[6px] text-white">
                          Ask UniBot
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4 leading-relaxed">
                Leveraging UNICEF&apos;s own AI-powered chatbot (UNIBOT), the
                platform provides tailored experience and builds deeper insight
                of what donors are asking about.
              </p>
              <div className="mt-auto">
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-2 uppercase tracking-wider font-semibold">
                  Link to macro-drivers:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-medium bg-primary/5 dark:bg-primary/10">
                    Personalised recognition
                  </span>
                  <span className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-medium bg-primary/5 dark:bg-primary/10">
                    Exclusive group
                  </span>
                  <span className="px-3 py-1 rounded-full border border-primary text-primary text-xs font-medium bg-primary/5 dark:bg-primary/10">
                    Tangible results
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 섹션 2: 통계 카드 */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-text-light dark:text-white border-t border-border-light dark:border-border-dark pt-10">
            To ultimately drive RR Funding for UNICEF
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 통계 1 */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6">
                <span className="material-icons text-primary text-2xl">
                  monetization_on
                </span>
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-text-light dark:text-white mb-2 tracking-tight">
                +$100M
              </div>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Projected revenue based on the comparative analysis with MSF
                (2024).
              </p>
            </div>

            {/* 통계 2 */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6">
                <span className="material-icons text-primary text-2xl">
                  pie_chart
                </span>
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-text-light dark:text-white mb-2 tracking-tight">
                &gt;42%
              </div>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Projected proportion of RR contribution (11M out of 27M went to
                RR in 2023).
              </p>
            </div>

            {/* 통계 3 */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-icons text-6xl">public</span>
              </div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <span className="material-icons text-primary text-2xl">
                    location_on
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="UK Flag"
                  className="w-8 h-auto rounded shadow-sm"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5kE_pBYaUjWjz8T8k8gl6uWCHzZfr90wKm20m7UjtBihr44j8cKHe-AJ-WEV9A5-7nYPBex0CtR65j46yQLMjyy9-xXiQGJ2jLlqHvf2PV_oYwURCJtJFvLRMT8DGu2iZvxW3uMIn70LVUJjaCyvUM_wTT4nZ-Af-PvDW1atEBiFDGcopfb0_rx0QnEYLHo_S9hl6RSxp5RLzSmqnU7qXbzkYHHUwolcagjTYJvOZdjttDQeWVHwytx8hEfAmqPMXYKLKT4pvCH5l"
                />
              </div>
              <p className="text-sm font-medium text-text-light dark:text-white leading-relaxed mb-4">
                A pilot project is currently underway with{" "}
                <span className="text-primary font-bold">UNICEF UK</span>.
              </p>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                All markets can learn more through the guidance document.
              </p>
              <a
                className="inline-flex items-center mt-4 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                href="#"
              >
                VIEW DOCUMENT{" "}
                <span className="material-icons text-sm ml-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
