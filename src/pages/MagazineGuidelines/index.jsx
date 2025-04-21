import React from "react";
import Informed from "../../components/Informed";

const MagazineGuidelines = () => {
  return (
    <div className="relative h-full">
      <div className="bg-(--Blumine) h-78">
        <img
          src="/images/allarticleimg.svg"
          alt=""
          className="absolute top-14"
        />
      </div>

      <div className="relative -top-60 m-auto lg:w-5xl bg-(--primary-color)  p-6 rounded-md">
        <div className="flex flex-col justify-between md:py-10 py-8 gap-8 md:px-20">
          <div>
            <img src="/images/magazine-img.svg" alt="" />
          </div>
          <h2 className="md:text-5xl text-3xl font-bold mb-4">
            Magazine Guidelines
          </h2>
          <p className="md:text-3xl text-base leading-[1.6]">
            At Right Angles is an in-depth magazine on matters of consequence to
            early mathematics and mathematics education. Hence articles must
            attempt to move beyond common myths, perceptions, and fallacies
            about mathematics.
          </p>
          <p className="md:text-2xl text-base leading-[1.75]">
            The magazine has zero tolerance for plagiarism. By submitting an
            article for publishing, the author is assumed to declare it to be
            original and not under any legal restriction for publication (e.g.
            previous copyright ownership). Wherever appropriate, relevant
            references and sources will be indicated in the article.
          </p>
        </div>
        <img src="/images/callforarcticle-img.png" alt="" />
        <div className="lg:w-1xl m-auto md:py-20 py-8 md:px-20 flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <div>
              <img src="/images/magazine-img.svg" alt="" />
            </div>
            <h3 className="md:text-5xl text-3xl font-bold">
              Guidelines for Articles
            </h3>
            <p className="md:text-2xl text-base">Suggested topics</p>
          </div>
          <div className="space-y-4 text-lg leading-relaxed">
            <ul className="list-disc text-xl pl-6 space-y-6">
              <li>
                Explain and illustrate themes and topics outlined in the
                National Curriculum Framework for School Education 2023 (NCF-SE
                2023) and for Foundational Stage 2022 (NCF-FS 2022)
              </li>
              <li>
                Specifically address challenges discussed in the NCF-SE 2023 and
                in NCF-FS 2022
              </li>
              <li>
                Be substantiated accounts of the history of mathematics or the
                history of mathematical thinking
              </li>
              <li>
                Include innovative worksheets or methods to engage students in
                drill and practice
              </li>
              <li>
                Describe real-life applications of mathematics relevant to the
                child’s context
              </li>
              <li>Describe interdisciplinary activities or projects</li>
              <li>
                Review puzzles or games with a practical connection to the
                syllabus
              </li>
              <li>
                Review books, websites, videos or apps which explain/illustrate
                mathematical content for the primary school and offer guidance
                on selecting relevant content, including online resources.
              </li>
              <li>
                Review Resources - Teaching Learning Material (TLM), or describe
                how to use local context, and local TLM in the math class.
              </li>
              <li>
                Develop pedagogical strategies for foundational numeracy as well
                as computational thinking
              </li>
              <li>
                Assist teachers in implementing differentiated teaching
                practices
              </li>
              <li>
                Provide material to help students bridge gaps in conceptual
                understanding.
              </li>
              <li>Address issues in assessment</li>
              <li>
                Suggest ways to identify and address misconceptions in
                mathematics learning
              </li>
              <li>
                Offer a list of problems along with discussions on their
                solutions and problem-solving strategies that are not commonly
                found in textbooks
              </li>

              <li className="text-lg leading-relaxed mt-4">
                In addition to full-length articles, we also welcome shorter
                pieces that can include a variety of engaging content. These
                could be reviews of books, mathematics software, or YouTube
                clips that explore mathematical themes. Other contributions can
                be ‘proofs without words’, mathematical paradoxes, ‘false
                proofs’, or creative expressions such as poetry, cartoons, or
                photographs with a mathematical theme. We also welcome anecdotes
                about a mathematician or interesting examples of ‘maths in
                craft, movies, etc’.
              </li>
            </ul>

            <p className="md:text-2xl text-base mt-10">
              Articles may also be sent to{" "}
              <span className="text-(--Blumine) underline underline-offset-2 decoration-(--black) ">
                atrightangles.editor@apu.edu.in
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="pt-14">
              <img src="/images/magazine-img.svg" alt="" />
            </div>
            <h2 className="md:text-5xl text-3xl font-bold mb-4">
              Magazine Guidelines
            </h2>
          </div>
          <div className="space-y-6">
            <p className="md:text-3xl text-base leading-[1.6]">
              At Right Angles is an in-depth magazine on matters of consequence
              to early mathematics and mathematics education. Hence articles
              must attempt to move beyond common myths, perceptions, and
              fallacies about mathematics.
            </p>
            <p className="md:text-3xl text-base leading-[1.6]">
              The magazine has zero tolerance for plagiarism. By submitting an
              article for publishing, the author is assumed to declare it to be
              original and not under any legal restriction for publication (e.g.
              previous copyright ownership). Wherever appropriate, relevant
              references and sources will be indicated in the article. 
            </p>
            <p className="md:text-3xl text-base leading-[1.6]">
              At Right Angles brings out translations of the magazine in other
              Indian languages. Hence, Azim Premji University holds the right to
              translate and disseminate all articles published in the magazine. 
            </p>
            <p className="md:text-3xl text-base leading-[1.6]">
              If the submitted article has already been published elsewhere, the
              author is requested to seek permission from the previous publisher
              for re-publication in the magazine and mention the same in the
              form of an ‘Author’s Note’ at the end of the article. It is also
              expected that the author forwards a copy of the permission letter,
              for our records. Similarly, if the author is sending his/her
              article to be re-published, (s)he is expected to ensure that due
              credit is then given to At Right Angles. 
            </p>
            <p className="md:text-3xl text-base leading-[1.6]">
              While At Right Angles welcomes a wide variety of articles,
              submissions that are found relevant but not suitable for
              publication in the magazine may be used in other avenues of
              publication within the University network, with the author’s
              permission. 
            </p>
          </div>
          <p className="py-6 md:text-3xl text-base">
            Prospective authors are asked to observe the following guidelines.
          </p>
          <ol className="list-decimal md:text-xl text-base pl-6 space-y-10">
            <li>
              Engaging Introduction: Write in a readable and inviting style,
              aiming to capture the reader's attention from the start. The first
              paragraph of the article should convey clearly what the article is
              about, it should carry an invitation to continue reading.
            </li>
            <li>
              Catchy Title: Title the article with an appropriate and catchy
              phrase that captures the spirit and substance of the article. 
            </li>
            <li>
              Style: Avoid a ‘theorem-proof’ format. Instead, integrate proofs
              into the article in an informal way. In fact, try to include how
              the proof can be arrived at or discovered. 
            </li>
            <li>
              Balance: Refrain from displaying long calculations. Strike a
              balance between providing too many details and making sudden jumps
              that depend on hidden calculations. 
            </li>
            <li>
              Accessible language: Avoid specialized jargon and notation that
              will be familiar only to specialists. If technical terms are
              needed, please define them. 
            </li>
            <li>
              Use visuals: Where possible, provide a diagram or a photograph
              that captures the essence of a mathematical idea. Never omit a
              diagram if it can help clarify a concept. 
            </li>
            <li>
              Concise References: Provide a compact list of references, with
              short recommendations. 
            </li>
            <li>
              Exercises and Questions: Make available a few exercises, and some
              questions to ponder either in the beginning or at the end of the
              article.
            </li>
            <li>
              Citation format: Cite sources and references in their order of
              occurrence, at the end of the article. Avoid footnotes. If
              footnotes are needed, number and place them separately. 
            </li>
            <li>
              Abbreviations and Acronyms: Explain all abbreviations and acronyms
              the first time they occur in an article. Make a glossary of all
              such terms and place it at the end of the article. 
            </li>
            <li>
              Assist teachers in implementing differentiated teaching practices
            </li>
            <li>
              Labelling visual elements: Label and number all diagrams, photos
              and figures included in the article. Attach them separately with
              the e-mail, with clear directions. (Please note: the minimum
              resolution for photos or scanned images should be 300 dpi). 
            </li>
            <li>
              Precise references to visuals: Refer to diagrams, photos, figures
              and tables by their numbers and avoid using references of these
              kinds: ‘here’, ‘there’, ‘above’, ‘below’, ‘to the left’, ‘to the
              right’.
            </li>
            <li>
              Author Bio: Include a high-resolution photograph (author photo)
              and a brief bio (not more than 50 words) that gives readers an
              idea of your experience and areas of expertise. 
            </li>
            <li>
              British Spelling: Adhere to British spellings – organise, not
              organize; colour not color, neighbour not neighbor, etc.
            </li>
            <li>
              Format for submission: Submit articles in MS Word format or in
              LaTeX.
            </li>
          </ol>
        </div>
      </div>
      <div className="">
        <img src="/images/callforarticle-img.svg" alt="" className="w-full" />
        <Informed />
      </div>
    </div>
  );
};

export default MagazineGuidelines;
