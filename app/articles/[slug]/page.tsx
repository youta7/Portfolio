import Image from "next/image";
import { notFound } from "next/navigation";

const articles = [
  {
    id: 1,
    title: "New AI agent learns to use CAD to create 3D objects from sketches",
    summary:
      "The virtual VideoCAD tool could boost designers’ productivity and help train engineers learning computer-aided design.",
    date: "2025-11-19",
    slug: "optimizing-ai-model-performance",
    image: "/1.png",
    thumbnail: "/pexels-tara-winstead-8386440.jpg",
    content: `\

But the software is notoriously complicated to learn, with thousands of commands to choose from. To be truly proficient in the software takes a huge amount of time and practice.

MIT engineers are looking to ease CAD’s learning curve with an AI model that uses CAD software much like a human would. Given a 2D sketch of an object, the model quickly creates a 3D version by clicking buttons and file options, similar to how an engineer would use the software.

The MIT team has created a new dataset called VideoCAD, which contains more than 41,000 examples of how 3D models are built in CAD software. By learning from these videos, which illustrate how different shapes and objects are constructed step-by-step, the new AI system can now operate CAD software much like a human user.

With VideoCAD, the team is building toward an AI-enabled “CAD co-pilot.” They envision that such a tool could not only create 3D versions of a design, but also work with a human user to suggest next steps, or automatically carry out build sequences that would otherwise be tedious and time-consuming to manually click through.

“There’s an opportunity for AI to increase engineers’ productivity as well as make CAD more accessible to more people,” says Ghadi Nehme, a graduate student in MIT’s Department of Mechanical Engineering.

“This is significant because it lowers the barrier to entry for design, helping people without years of CAD training to create 3D models more easily and tap into their creativity,” adds Faez Ahmed, associate professor of mechanical engineering at MIT.

Ahmed and Nehme, along with graduate student Brandon Man and postdoc Ferdous Alam, will present their work at the Conference on Neural Information Processing Systems (NeurIPS) in December.

### Click by click

The team’s new work expands on recent developments in AI-driven user interface (UI) agents — tools that are trained to use software programs to carry out tasks, such as automatically gathering information online and organizing it in an Excel spreadsheet. Ahmed’s group wondered whether such UI agents could be designed to use CAD, which encompasses many more features and functions, and involves far more complicated tasks than the average UI agent can handle.

In their new work, the team aimed to design an AI-driven UI agent that takes the reins of the CAD program to create a 3D version of a 2D sketch, click by click. To do so, the team first looked to an existing dataset of objects that were designed in CAD by humans. Each object in the dataset includes the sequence of high-level design commands, such as “sketch line,” “circle,” and “extrude,” that were used to build the final object.

However, the team realized that these high-level commands alone were not enough to train an AI agent to actually use CAD software. A real agent must also understand the details behind each action. For instance: Which sketch region should it select? When should it zoom in? And what part of a sketch should it extrude? To bridge this gap, the researchers developed a system to translate high-level commands into user-interface interactions.

“For example, let’s say we drew a sketch by drawing a line from point 1 to point 2,” Nehme says. “We translated those high-level actions to user-interface actions, meaning we say, go from this pixel location, click, and then move to a second pixel location, and click, while having the ‘line’ operation selected.”\n

In the end, the team generated over 41,000 videos of human-designed CAD objects, each of which is described in real-time in terms of the specific clicks, mouse-drags, and other keyboard actions that the human originally carried out. They then fed all this data into a model they developed to learn connections between UI actions and CAD object generation.

Once trained on this dataset, which they dub VideoCAD, the new AI model could take a 2D sketch as input and directly control the CAD software, clicking, dragging, and selecting tools to construct the full 3D shape. The objects ranged in complexity from simple brackets to more complicated house designs. The team is training the model on more complex shapes and envisions that both the model and the dataset could one day enable CAD co-pilots for designers in a wide range of fields.

“VideoCAD is a valuable first step toward AI assistants that help onboard new users and automate the repetitive modeling work that follows familiar patterns,” says Mehdi Ataei, who was not involved in the study, and is a senior research scientist at Autodesk Research, which develops new design software tools. “This is an early foundation, and I would be excited to see successors that span multiple CAD systems, richer operations like assemblies and constraints, and more realistic, messy human workflows.”

### Related Topics: 3-D, Software, Design, Artificial intelligence, automation, Computer modeling, Machine learning
`,
  },
  {
    id: 2,
    title: "The cost of thinking",
    summary: "MIT neuroscientists find a surprising parallel in the ways humans and new AI models solve complex problems.",
    date: "2025-11-19",
    slug: "ethical-ai-best-practices",
    image: "/2.png",
    thumbnail: "/2.png",
    content: `\
Large language models (LLMs) like ChatGPT can write an essay or plan a menu almost instantly. But until recently, it was also easy to stump them. The models, which rely on language patterns to respond to users’ queries, often failed at math problems and were not good at complex reasoning. Suddenly, however, they’ve gotten a lot better at these things.

A new generation of LLMs known as reasoning models are being trained to solve complex problems. Like humans, they need some time to think through problems like these — and remarkably, scientists at MIT’s McGovern Institute for Brain Research have found that the kinds of problems that require the most processing from reasoning models are the very same problems that people need take their time with. In other words, they report today in the journal PNAS, the “cost of thinking” for a reasoning model is similar to the cost of thinking for a human.

The researchers, who were led by Evelina Fedorenko, an associate professor of brain and cognitive sciences and an investigator at the McGovern Institute, conclude that in at least one important way, reasoning models have a human-like approach to thinking. That, they note, is not by design. “People who build these models don’t care if they do it like humans. They just want a system that will robustly perform under all sorts of conditions and produce correct responses,” Fedorenko says. “The fact that there’s some convergence is really quite striking.”

### Reasoning models

Like many forms of artificial intelligence, the new reasoning models are artificial neural networks: computational tools that learn how to process information when they are given data and a problem to solve. Artificial neural networks have been very successful at many of the tasks that the brain’s own neural networks do well — and in some cases, neuroscientists have discovered that those that perform best do share certain aspects of information processing in the brain. Still, some scientists argued that artificial intelligence was not ready to take on more sophisticated aspects of human intelligence.

“Up until recently, I was among the people saying, ‘These models are really good at things like perception and language, but it’s still going to be a long ways off until we have neural network models that can do reasoning,” Fedorenko says. “Then these large reasoning models emerged and they seem to do much better at a lot of these thinking tasks, like solving math problems and writing pieces of computer code.”

Andrea Gregor de Varda, a K. Lisa Yang ICoN Center Fellow and a postdoc in Fedorenko’s lab, explains that reasoning models work out problems step by step. “At some point, people realized that models needed to have more space to perform the actual computations that are needed to solve complex problems,” he says. “The performance started becoming way, way stronger if you let the models break down the problems into parts.”

To encourage models to work through complex problems in steps that lead to correct solutions, engineers can use reinforcement learning. During their training, the models are rewarded for correct answers and penalized for wrong ones. “The models explore the problem space themselves,” de Varda says. “The actions that lead to positive rewards are reinforced, so that they produce correct solutions more often.”

Models trained in this way are much more likely than their predecessors to arrive at the same answers a human would when they are given a reasoning task. Their stepwise problem-solving does mean reasoning models can take a bit longer to find an answer than the LLMs that came before — but since they’re getting right answers where the previous models would have failed, their responses are worth the wait.

The models’ need to take some time to work through complex problems already hints at a parallel to human thinking: if you demand that a person solve a hard problem instantaneously, they’d probably fail, too. De Varda wanted to examine this relationship more systematically. So he gave reasoning models and human volunteers the same set of problems, and tracked not just whether they got the answers right, but also how much time or effort it took them to get there.

### Time versus tokens

This meant measuring how long it took people to respond to each question, down to the millisecond. For the models, Varda used a different metric. It didn’t make sense to measure processing time, since this is more dependent on computer hardware than the effort the model puts into solving a problem. So instead, he tracked tokens, which are part of a model’s internal chain of thought. “They produce tokens that are not meant for the user to see and work on, but just to have some track of the internal computation that they’re doing,” de Varda explains. “It’s as if they were talking to themselves.”

Both humans and reasoning models were asked to solve seven different types of problems, like numeric arithmetic and intuitive reasoning. For each problem class, they were given many problems. The harder a given problem was, the longer it took people to solve it — and the longer it took people to solve a problem, the more tokens a reasoning model generated as it came to its own solution.

Likewise, the classes of problems that humans took longest to solve were the same classes of problems that required the most tokens for the models: arithmetic problems were the least demanding, whereas a group of problems called the “ARC challenge,” where pairs of colored grids represent a transformation that must be inferred and then applied to a new object, were the most costly for both people and models.

De Varda and Fedorenko say the striking match in the costs of thinking demonstrates one way in which reasoning models are thinking like humans. That doesn’t mean the models are recreating human intelligence, though. The researchers still want to know whether the models use similar representations of information to the human brain, and how those representations are transformed into solutions to problems. They’re also curious whether the models will be able to handle problems that require world knowledge that is not spelled out in the texts that are used for model training.

The researchers point out that even though reasoning models generate internal monologues as they solve problems, they are not necessarily using language to think. “If you look at the output that these models produce while reasoning, it often contains errors or some nonsensical bits, even if the model ultimately arrives at a correct answer. So the actual internal computations likely take place in an abstract, non-linguistic representation space, similar to how humans don’t use language to think,” he says.

### Related Topics: Research, Brain and cognitive sciences, Neuroscience, Artificial intelligence, Machine learning, Computer science and technology, McGovern, InstituteSchool of Science
`,
  },
  {
    id: 3,
    title: "MIT Energy Initiative launches Data Center Power Forum",
    summary: "MIT faculty and MITEI member company experts address power demand from data centers.",
    date: "2025-11-07",
    slug: "ai-in-healthcare-transforming-patient-care",
    image: "/3.png",
    thumbnail: "/3.png",
    content: `\
With global power demand from data centers expected to more than double by 2030, the MIT Energy Initiative (MITEI) in September launched an effort that brings together MIT researchers and industry experts to explore innovative solutions for powering the data-driven future. At its annual research conference, MITEI announced the Data Center Power Forum, a targeted research effort for MITEI member companies interested in addressing the challenges of data center power demand. The Data Center Power Forum builds on lessons from MITEI’s May 2025 symposium on the energy to power the expansion of artificial intelligence (AI) and focus panels related to data centers at the fall 2024 research conference.

In the United States, data centers consumed 4 percent of the country’s electricity in 2023, with demand expected to increase to 9 percent by 2030, according to the Electric Power Research Institute. Much of the growth in demand is from the increasing use of AI, which is placing an unprecedented strain on the electric grid. This surge in demand presents a serious challenge for the technology and energy sectors, government policymakers, and everyday consumers, who may see their electric bills skyrocket as a result.

“MITEI has long supported research on ways to produce more efficient and cleaner energy and to manage the electric grid. In recent years, MITEI has also funded dozens of research projects relevant to data center energy issues. Building on this history and knowledge base, MITEI’s Data Center Power Forum is convening a specialized community of industry members who have a vital stake in the sustainable growth of AI and the acceleration of solutions for powering data centers and expanding the grid,” says William H. Green, the director of MITEI and the Hoyt C. Hottel Professor of Chemical Engineering.

MITEI’s mission is to advance zero- and low-carbon solutions to expand energy access and mitigate climate change. MITEI works with companies from across the energy innovation chain, including in the infrastructure, automotive, electric power, energy, natural resources, and insurance sectors. MITEI member companies have expressed strong interest in the Data Center Power Forum and are committing to support focused research on a wide range of energy issues associated with data center expansion, Green says.

MITEI’s Data Center Power Forum will provide its member companies with reliable insights into energy supply, grid load operations and management, the built environment, and electricity market design and regulatory policy for data centers. The forum complements MIT’s deep expertise in adjacent topics such as low-power processors, efficient algorithms, task-specific AI, photonic devices, quantum computing, and the societal consequences of data center expansion. As part of the forum, MITEI’s Future Energy Systems Center is funding projects relevant to data center energy in its upcoming proposal cycles. MITEI Research Scientist Deep Deka has been named the program manager for the forum.

“Figuring out how to meet the power demands of data centers is a complicated challenge. Our research is coming at this from multiple directions, from looking at ways to expand transmission capacity within the electrical grid in order to bring power to where it is needed, to ensuring the quality of electrical service for existing users is not diminished when new data centers come online, and to shifting computing tasks to times and places when and where energy is available on the grid," said Deka.

MITEI currently sponsors substantial research related to data center energy topics across several MIT departments. The existing research portfolio includes more than a dozen projects related to data centers, including low- or zero-carbon solutions for energy supply and infrastructure, electrical grid management, and electricity market policy. MIT researchers funded through MITEI’s industry consortium are also designing more energy-efficient power electronics and processors and investigating behind-the-meter low-/no-carbon power plants and energy storage. MITEI-supported experts are studying how to use AI to optimize electrical distribution and the siting of data centers and conducting techno-economic analyses of data center power schemes. MITEI’s consortium projects are also bringing fresh perspectives to data center cooling challenges and considering policy approaches to balance the interests of shareholders. 

By drawing together industry stakeholders from across the AI and grid value chain, the Data Center Power Forum enables a richer dialog about solutions to power, grid, and carbon management problems in a noncommercial and collaborative setting.

“The opportunity to meet and to hold discussions on key data center challenges with other forum members from different sectors, as well as with MIT faculty members and research scientists, is a unique benefit of this MITEI-led effort,” Green says.

MITEI addressed the issue of data center power needs with its company members during its fall 2024 Annual Research Conference with a panel session titled, “The extreme challenge of powering data centers in a decarbonized way.” MITEI Director of Research Randall Field led a discussion with representatives from large technology companies Google and Microsoft, known as “hyperscalers,” as well as Madrid-based infrastructure developer Ferrovial S.E. and utility company Exelon Corp. Another conference session addressed the related topic, “Energy storage and grid expansion.” This past spring, MITEI focused its annual Spring Symposium on data centers, hosting faculty members and researchers from MIT and other universities, business leaders, and a representative of the Federal Energy Regulatory Commission for a full day of sessions on the topic, “AI and energy: Peril and promise.” 

### Relatd Topics: Artificial Intelligence, Energy Storage, Power Systems, Sustainable Energy
`,
  },
  {
    id: 4,
    title: "Creating AI that matters",
    summary: "How the MIT-IBM Watson AI Lab is shaping AI-sociotechnical systems for the future.",
    date: "2025-11-07",
    slug: "the-future-of-robotics",
    image: "/4.png",
    thumbnail: "/4.png",
    content: `\
When it comes to artificial intelligence, MIT and IBM were there at the beginning: laying foundational work and creating some of the first programs — AI predecessors — and theorizing how machine “intelligence” might come to be.

Today, collaborations like the MIT-IBM Watson AI Lab, which launched eight years ago, are continuing to deliver expertise for the promise of tomorrow’s AI technology. This is critical for industries and the labor force that stand to benefit, particularly in the short term: from $3-4 trillion of forecast global economic benefits and 80 percent productivity gains for knowledge workers and creative tasks, to significant incorporations of generative AI into business processes (80 percent) and software applications (70 percent) in the next three years.

While industry has seen a boom in notable models, chiefly in the past year, academia continues to drive the innovation, contributing most of the highly cited research. At the MIT-IBM Watson AI Lab, success takes the form of 54 patent disclosures, an excess of 128,000 citations with an h-index of 162, and more than 50 industry-driven use cases. Some of the lab’s many achievements include improved stent placement with AI imaging techniques, slashing computational overhead, shrinking models while maintaining performance, and modeling of interatomic potential for silicate chemistry.

“The lab is uniquely positioned to identify the ‘right’ problems to solve, setting us apart from other entities,” says Aude Oliva, lab MIT director and director of strategic industry engagement in the MIT Schwarzman College of Computing. “Further, the experience our students gain from working on these challenges for enterprise AI translates to their competitiveness in the job market and the promotion of a competitive industry.”

“The MIT-IBM Watson AI Lab has had tremendous impact by bringing together a rich set of collaborations between IBM and MIT’s researchers and students,” says Provost Anantha Chandrakasan, who is the lab’s MIT co-chair and the Vannevar Bush Professor of Electrical Engineering and Computer Science. “By supporting cross-cutting research at the intersection of AI and many other disciplines, the lab is advancing foundational work and accelerating the development of transformative solutions for our nation and the world.”

### Long-horizon work

As AI continues to garner interest, many organizations struggle to channel the technology into meaningful outcomes. A 2024 Gartner study finds that, “at least 30% of generative AI projects will be abandoned after proof of concept by the end of 2025,” demonstrating ambition and widespread hunger for AI, but a lack of knowledge for how to develop and apply it to create immediate value.

Here, the lab shines, bridging research and deployment. The majority of the lab’s current-year research portfolio is aligned to use and develop new features, capacities, or products for IBM, the lab’s corporate members, or real-world applications. The last of these comprise large language models, AI hardware, and foundation models, including multi-modal, bio-medical, and geo-spatial ones. Inquiry-driven students and interns are invaluable in this pursuit, offering enthusiasm and new perspectives while accumulating domain knowledge to help derive and engineer advancements in the field, as well as opening up new frontiers for exploration with AI as a tool.

Findings from the AAAI 2025 Presidential panel on the Future of AI Research support the need for contributions from academia-industry collaborations like the lab in the AI arena: “Academics have a role to play in providing independent advice and interpretations of these results [from industry] and their consequences. The private sector focuses more on the short term, and universities and society more on a longer-term perspective.”

Bringing these strengths together, along with the push for open sourcing and open science, can spark innovation that neither could achieve alone. History shows that embracing these principles, and sharing code and making research accessible, has long-term benefits for both the sector and society. In line with IBM and MIT’s missions, the lab contributes technologies, findings, governance, and standards to the public sphere through this collaboration, thereby enhancing transparency, accelerating reproducibility, and ensuring trustworthy advances.

The lab was created to merge MIT’s deep research expertise with IBM’s industrial R&D capacity, aiming for breakthroughs in core AI methods and hardware, as well as new applications in areas like health care, chemistry, finance, cybersecurity, and robust planning and decision-making for business.

### Bigger isn't always better

Today, large foundation models are giving way to smaller, more task-specific models yielding better performance. Contributions from lab members like Song Han, associate professor in the MIT Department of Electrical Engineering and Computer Science (EECS), and IBM Research’s Chuang Gan help make this possible, through work such as once-for-all and AWQ. Innovations such as these improve efficiency with better architectures, algorithm shrinking, and activation-aware weight quantization, letting models like language processing run on edge devices at faster speeds and reduced latency.

Consequently, foundation, vision, multimodal, and large language models have seen benefits, allowing for the lab research groups of Oliva, MIT EECS Associate Professor Yoon Kim, and IBM Research members Rameswar Panda, Yang Zhang, and Rogerio Feris to build on the work. This includes techniques to imbue models with external knowledge and the development of linear attention transformer methods for higher throughput, compared to other state-of-the-art systems. 

Understanding and reasoning in vision and multimodal systems has also seen a boon. Works like “Task2Sim” and “AdaFuse” demonstrate improved vision model performance if pre-training takes place on synthetic data, and how video action recognition can be boosted by fusing channels from past and current feature maps.

As part of a commitment to leaner AI, the lab teams of Gregory Wornell, the MIT EECS Sumitomo Electric Industries Professor in Engineering, IBM Research’s Chuang Gan, and David Cox, VP for foundational AI at IBM Research and the lab’s IBM director, have shown that model adaptability and data efficiency can go hand in hand. Two approaches, EvoScale and Chain-of-Action-Thought reasoning (COAT), enable language models to make the most of limited data and computation by improving on prior generation attempts through structured iteration, narrowing in on a better response. COAT uses a meta-action framework and reinforcement learning to tackle reasoning-intensive tasks via self-correction, while EvoScale brings a similar philosophy to code generation, evolving high-quality candidate solutions. These techniques help to enable resource-conscious, targeted, real-world deployment.

“The impact of MIT-IBM research on our large language model development efforts cannot be overstated,” says Cox. “We’re seeing that smaller, more specialized models and tools are having an outsized impact, especially when they are combined. Innovations from the MIT-IBM Watson AI Lab help shape these technical directions and influence the strategy we are taking in the market through platforms like watsonx.”

For example, numerous lab projects have contributed features, capabilities, and uses to IBM’s Granite Vision, which provides impressive computer vision designed for document understanding, despite its compact size. This comes at a time when there’s a growing need for extraction, interpretation, and trustworthy summarization of information and data contained in long formats for enterprise purposes.

Other achievements that extend beyond direct research on AI and across disciplines are not only beneficial, but necessary for advancing the technology and lifting up society, concludes the 2025 AAAI panel.

Work from the lab’s Caroline Uhler and Devavrat Shah — both Andrew (1956) and Erna Viterbi Professors in EECS and the Institute for Data, Systems, and Society (IDSS) — along with IBM Research’s Kristjan Greenewald, transcends specializations. They are developing causal discovery methods to uncover how interventions affect outcomes, and identify which ones achieve desired results. The studies include developing a framework that can both elucidate how “treatments” for different sub-populations may play out, like on an ecommerce platform or mobility restrictions on morbidity outcomes. Findings from this body of work could influence the fields of marketing and medicine to education and risk management.

“Advances in AI and other areas of computing are influencing how people formulate and tackle challenges in nearly every discipline. At the MIT-IBM Watson AI Lab, researchers recognize this cross-cutting nature of their work and its impact, interrogating problems from multiple viewpoints and bringing real-world problems from industry, in order to develop novel solutions,” says Dan Huttenlocher, MIT lab co-chair, dean of the MIT Schwarzman College of Computing, and the Henry Ellis Warren (1894) Professor of Electrical Engineering and Computer Science.

A significant piece of what makes this research ecosystem thrive is the steady influx of student talent and their contributions through MIT’s Undergraduate Research Opportunities Program (UROP), MIT EECS 6A Program, and the new MIT-IBM Watson AI Lab Internship Program. Altogether, more than 70 young researchers have not only accelerated their technical skill development, but, through guidance and support by the lab’s mentors, gained knowledge in AI domains to become emerging practitioners themselves. This is why the lab continually seeks to identify promising students at all stages in their exploration of AI’s potential.

“In order to unlock the full economic and societal potential of AI, we need to foster ‘useful and efficient intelligence,’” says Sriram Raghavan, IBM Research VP for AI and IBM chair of the lab. “To translate AI promise into progress, it’s crucial that we continue to focus on innovations to develop efficient, optimized, and fit-for-purpose models that can easily be adapted to specific domains and use cases. Academic-industry collaborations, such as the MIT-IBM Watson AI Lab, help drive the breakthroughs that make this possible.”

### Related Topics: Research, MIT-IBM Watson AI Lab, Collaboration, Industry, Computer science and technology, Artificial intelligence, Machine learning,  Algorithms, Data, Business and management, Technology and society
`,
  },
  {
    id: 5,
    title: "Checking the quality of materials just got easier with a new AI tool",
    summary: "Acting as a “virtual spectrometer,” SpectroGen generates spectroscopic data in any modality, such as X-ray or infrared, to quickly assess a material’s quality.",
    date: "2025-10-14",
    slug: "machine-learning-in-finance",
    image: "/5.png",
    thumbnail: "/5.png",
    content: `\
Manufacturing better batteries, faster electronics, and more effective pharmaceuticals depends on the discovery of new materials and the verification of their quality. Artificial intelligence is helping with the former, with tools that comb through catalogs of materials to quickly tag promising candidates.

But once a material is made, verifying its quality still involves scanning it with specialized instruments to validate its performance — an expensive and time-consuming step that can hold up the development and distribution of new technologies.

Now, a new AI tool developed by MIT engineers could help clear the quality-control bottleneck, offering a faster and cheaper option for certain materials-driven industries.

In a study appearing today in the journal Matter, the researchers present “SpectroGen,” a generative AI tool that turbocharges scanning capabilities by serving as a virtual spectrometer. The tool takes in “spectra,” or measurements of a material in one scanning modality, such as infrared, and generates what that material’s spectra would look like if it were scanned in an entirely different modality, such as X-ray. The AI-generated spectral results match, with 99 percent accuracy, the results obtained from physically scanning the material with the new instrument.

Certain spectroscopic modalities reveal specific properties in a material: Infrared reveals a material’s molecular groups, while X-ray diffraction visualizes the material’s crystal structures, and Raman scattering illuminates a material’s molecular vibrations. Each of these properties is essential in gauging a material’s quality and typically requires tedious workflows on multiple expensive and distinct instruments to measure.

With SpectroGen, the researchers envision that a diversity of measurements can be made using a single and cheaper physical scope. For instance, a manufacturing line could carry out quality control of materials by scanning them with a single infrared camera. Those infrared spectra could then be fed into SpectroGen to automatically generate the material’s X-ray spectra, without the factory having to house and operate a separate, often more expensive X-ray-scanning laboratory.

The new AI tool generates spectra in less than one minute, a thousand times faster compared to traditional approaches that can take several hours to days to measure and validate.

“We think that you don’t have to do the physical measurements in all the modalities you need, but perhaps just in a single, simple, and cheap modality,” says study lead Loza Tadesse, assistant professor of mechanical engineering at MIT. “Then you can use SpectroGen to generate the rest. And this could improve productivity, efficiency, and quality of manufacturing.”

The study was led by Tadesse, with former MIT postdoc Yanmin Zhu serving as first author.

### Beyond bonds

Tadesse’s interdisciplinary group at MIT pioneers technologies that advance human and planetary health, developing innovations for applications ranging from rapid disease diagnostics to sustainable agriculture.

“Diagnosing diseases, and material analysis in general, usually involves scanning samples and collecting spectra in different modalities, with different instruments that are bulky and expensive and that you might not all find in one lab,” Tadesse says. “So, we were brainstorming about how to miniaturize all this equipment and how to streamline the experimental pipeline.”

Zhu noted the increasing use of generative AI tools for discovering new materials and drug candidates, and wondered whether AI could also be harnessed to generate spectral data. In other words, could AI act as a virtual spectrometer?

A spectroscope probes a material’s properties by sending light of a certain wavelength into the material. That light causes molecular bonds in the material to vibrate in ways that scatter the light back out to the scope, where the light is recorded as a pattern of waves, or spectra, that can then be read as a signature of the material’s structure.

For AI to generate spectral data, the conventional approach would involve training an algorithm to recognize connections between physical atoms and features in a material, and the spectra they produce. Given the complexity of molecular structures within just one material, Tadesse says such an approach can quickly become intractable.

“Doing this even for just one material is impossible,” she says. “So, we thought, is there another way to interpret spectra?”

The team found an answer with math. They realized that a spectral pattern, which is a sequence of waveforms, can be represented mathematically. For instance, a spectrum that contains a series of bell curves is known as a “Gaussian” distribution, which is associated with a certain mathematical expression, compared to a series of narrower waves, known as a “Lorentzian” distribution, that is described by a separate, distinct algorithm. And as it turns out, for most materials infrared spectra characteristically contain more Lorentzian waveforms, while Raman spectra are more Gaussian, and X-ray spectra is a mix of the two.

Tadesse and Zhu worked this mathematical interpretation of spectral data into an algorithm that they then incorporated into a generative AI model.

“It’s a physics-savvy generative AI that understands what spectra are,” Tadesse says. “And the key novelty is, we interpreted spectra not as how it comes about from chemicals and bonds, but that it is actually math — curves and graphs, which an AI tool can understand and interpret.”

### Data co-pilot

The team demonstrated their SpectroGen AI tool on a large, publicly available dataset of over 6,000 mineral samples. Each sample includes information on the mineral’s properties, such as its elemental composition and crystal structure. Many samples in the dataset also include spectral data in different modalities, such as X-ray, Raman, and infrared. Of these samples, the team fed several hundred to SpectroGen, in a process that trained the AI tool, also known as a neural network, to learn correlations between a mineral’s different spectral modalities. This training enabled SpectroGen to take in spectra of a material in one modality, such as in infrared, and generate what a spectra in a totally different modality, such as X-ray, should look like.

Once they trained the AI tool, the researchers fed SpectroGen spectra from a mineral in the dataset that was not included in the training process. They asked the tool to generate a spectra in a different modality, based on this “new” spectra. The AI-generated spectra, they found, was a close match to the mineral’s real spectra, which was originally recorded by a physical instrument. The researchers carried out similar tests with a number of other minerals and found that the AI tool quickly generated spectra, with 99 percent correlation.

“We can feed spectral data into the network and can get another totally different kind of spectral data, with very high accuracy, in less than a minute,” Zhu says.

The team says that SpectroGen can generate spectra for any type of mineral. In a manufacturing setting, for instance, mineral-based materials that are used to make semiconductors and battery technologies could first be quickly scanned by an infrared laser. The spectra from this infrared scanning could be fed into SpectroGen, which would then generate a spectra in X-ray, which operators or a multiagent AI platform can check to assess the material’s quality.

“I think of it as having an agent or co-pilot, supporting researchers, technicians, pipelines and industry,” Tadesse says. “We plan to customize this for different industries’ needs.”

The team is exploring ways to adapt the AI tool for disease diagnostics, and for agricultural monitoring through an upcoming project funded by Google. Tadesse is also advancing the technology to the field through a new startup and envisions making SpectroGen available for a wide range of sectors, from pharmaceuticals to semiconductors to defense.

### Related Topics: Artificial intelligence, Imaging, LightMachine learning,Manufacturing, Materials science and engineering, Mechanical engineering, ResearchSchool of Engineering
`,
  },
];

export function generateStaticParams() {
  return [
    { slug: "optimizing-ai-model-performance" },
    { slug: "ethical-ai-best-practices" },
    { slug: "ai-in-healthcare-transforming-patient-care" },
    { slug: "the-future-of-robotics" },
    { slug: "machine-learning-in-finance" },
  ];
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  // simple markdown-ish rendering for headings & paragraphs
  const lines = article.content.split("\n").filter((l) => l.trim() !== "");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* date like in the screenshot */}
        <p className="text-xs text-muted-foreground mb-2">| {article.date}</p>

        {/* title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          {article.title}
        </h1>

        {/* hero image with nice style */}
        <div className="relative w-full h-64 md:h-80 mb-10 rounded-2xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>

        {/* article body styled like a blog */}
        <article className="prose prose-invert max-w-none">
          {lines.map((line, idx) => {
            const trimmed = line.trim();

            // Emphasize 'Click by click' line
            // if (trimmed.toLowerCase() === "click by click") {
            //   return (
            //     <h2
            //       key={idx}
            //       className="text-3xl md:text-3xl font-extrabold text-green-500 mb-8 mt-12 tracking-tight"
            //     >
            //       {trimmed}
            //     </h2>
            //   );
            // }

            // Emphasize 'Time versus tokens' as bold green heading with thicker and larger font
            if (trimmed.toLowerCase() === "time versus tokens" || trimmed === "## Time versus tokens") {
              return (
                <h2
                  key={idx}
                  className="text-3xl md:text-3xl font-extrabold text-green-500 mb-8 mt-12 tracking-tight"
                  style={{ fontWeight: 900 }}
                >
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }



            // Highlight 'Reasoning models' in bold green, thicker and larger font within paragraphs
            // const reasoningRegex = /(\bReasoning models\b)/g;
            // if (reasoningRegex.test(trimmed)) {
            //   const content = trimmed.replace(
            //     reasoningRegex,
            //     match => `<span style=''>${match}</span>`
            //   );
            //   return (
            //     <p key={idx} className="text-3xl md:text-3xl font-extrabold text-green-500 mb-8 mt-12 tracking-tight" dangerouslySetInnerHTML={{ __html: content }} />
            //   );
            // }

            // Markdown image ![alt](src)
            if (trimmed.startsWith("![")) {
              const match = trimmed.match(/!\[(.*?)\]\((.*?)\)/);
              if (match) {
                const alt = match[1];
                const src = match[2];
                return (
                  <Image
                    key={idx}
                    src={src}
                    alt={alt}
                    width={900}
                    height={500}
                    className="rounded-xl my-6 shadow-lg"
                  />
                );
              }
            }

            // Headings ### ...
            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-8"
                >
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            // Bold for lines starting with -
            if (trimmed.startsWith("- ")) {
              return (
                <p key={idx} className="text-base md:text-lg font-semibold text-foreground mb-2">
                  {trimmed}
                </p>
              );
            }

            // ...existing code...

            // Default paragraph
            return (
              <p key={idx} className="text-base md:text-lg text-foreground mb-4">
                {trimmed}
              </p>
            );
          })}
        </article>
      </div>
    </main>
  );
}
