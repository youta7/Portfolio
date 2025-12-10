import Image from "next/image";
import { notFound } from "next/navigation";

const articles = [
  {
    id: 1,
    title: "New AI agent learns to use CAD to create 3D objects from sketches",
    summary:
      "The virtual VideoCAD tool could boost designers’ productivity and help train engineers learning computer-aided design.",
    date: "2025-11-19",
    slug: "New-AI-agent",
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
    slug: "The-cost-of-thinking",
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
    slug: "MIT-Energy-Initiative",
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
    slug: "Creating-AI-that-matters",
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
    slug: "Checking-the-quality-of-materials",
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
  {
    id: 6,
    title: "A voice for tech workers",
    summary: "The reach of artificial intelligence technologies across all parts of society is steadily growing, but so is the awareness of how they can negatively impact human rights. As 2019 draws to a close, the trajectory of technological progress defined by big technology companies is meeting resistance.",
    date: "2025-08-10",
    slug: "A-voice-for-tech-workers",
    image: "/6.png",
    thumbnail: "/6.png",
    content: `\
This year has shown that pushback against powerful and potentially harmful AI technologies can be successful. There is much debate around the use of facial recognition in surveillance applications. After protests from human-rights groups and calls from politicians, government bans on facial recognition are now in place in four major US cities. Within big technology companies such as Google, Microsoft and Amazon, a growing movement of workers are raising the alarm over the possible harmful impact of their companies’ products and services. Earlier this year, a group called Googlers for Human Rights urged Google to back away from bidding for a cloud computing contract that involved processing immigrant data for the US Immigration and Customs Enforcement agency (ICE). ICE has been widely criticized over multiple incidents of inhumane treatment of immigrants, including children. In 2018, several employees resigned and around 4,000 of them signed a petition in protest against Google’s involvement in another US government project, Project Maven, which analyses drone footage and identifies potential strike targets. Google withdrew from the collaboration. A few months later, Google backed out of bidding for the US Department of Defense’s Joint Enterprise Defense Infrastructure (JEDI) contract, a US$10 billion cloud infrastructure project.

Also this year, over 8,500 Amazon employees mobilized and called upon the company to face up to its contribution to climate change. In an open letter, CEO Jeff Bezos and directors were urged to formulate a comprehensive climate plan. Under threat of a massive walkout, Bezos announced a climate pledge on 19 September in which he committed to net-zero carbon emissions for the company by 2040.

But such employee-led campaigns are not always successful. GitHub, the code and software repository owned since mid-2018 by Microsoft, recently saw several employees resign over their own contract with ICE. In a recent memo, GitHub CEO Nat Friedman pledged to donate US$500,000 to charities that support immigrants, which is remarkable as the contract itself is worth US$200,000. However, this move drew further criticism from employees, who argued in an open letter that money cannot offset human lives. Amazon and Microsoft employees have also asked their CEOs to cut ties with ICE. The JEDI contract was eventually awarded to Microsoft, despite internal protests from their workers.

- Silicon Valley has a rich history of working on government and military projects, starting with the Second World War. And the issues can be complex: technologies that can potentially be used for harm can also save lives. In the aforesaid memo, GitHub CEO Friedman argues that software technologies “could be used in projects that support policies we both agree and disagree with”, pointing out that, for instance, ICE can employ Github’s services in the fight against human trafficking. According to Friedman, companies should advocate their values in a democracy by using their corporate voice, not by unplugging technology. Brad Smith, the president of Microsoft, made a similar point last year in response to the debate over whether Microsoft should bid for JEDI, arguing that the company should use its knowledge and voice as a corporate citizen to address ethics concerns over AI technology in weapons and warfare through the country’s democratic processes. An underlying argument is that companies are providing a tool or service to government parties that have been elected by the public: it’s the government that holds the ultimate responsibility for use of technology.

However, many researchers and tech workers have realized that separating basic technology development and real-world applications in this way can become an untenable position. The petition from Google employees last year asking the company to withdraw from Project Maven opened with “We believe that Google should not be in the business of war” and argued that moral responsibility for the technologies the company develops should not be outsourced. In a BBC interview, former Google employee Laura Nolan explains how she understood that she would ultimately have been part of a ‘kill chain’ while working on Google Cloud infrastructure for Project Maven. She went on to contribute to the Campaign to Stop Killer Robots, a coalition of NGOs that works towards a full, worldwide ban on autonomous weapons.

- There is a rich history of tech workers in Silicon Valley organizing to campaign against potentially harmful projects, often demanding a genuinely democratic say in how technologies are developed and used. Their in-demand skillset promises a powerful opportunity for them to achieve such influence. Many tech workers view themselves as politically progressive, and joined the industry because they genuinely believed in its power to bring positive change to the world. Their collective power has the potential to forge positive change from the inside.

But there are significant challenges to employees’ movements, especially as there are signs that companies are attempting to curb organized internal protests and are making a move towards less transparency in executive decisions. It will be up to movements such as The Tech Workers Coalition, which was formed in 2014 and evolved into an initiative to empower tech workers who want more say in their companies’ decisions, to give a strong voice to workers across the industry and to strive towards long-term success.

In 2020, the growing movement of workers in powerful technology companies must continue to push towards a more democratic, inclusive and transparent development of AI technologies that are safe and bring benefits for all.
`,
  },
  {
    id: 7,
    title: "Deceiving possibilities",
    summary: "Robots are making a transition into human environments, where they can directly interact with us, in shops, hospitals, schools and more. Transparency about robots’ capabilities and level of autonomy should be integrated into the design from the start.",
    date: "2025-07-12",
    slug: "Deceiving-possibilities",
    image: "/7.png",
    thumbnail: "/7.png",
    content: `\
In early September, a collection of robots took to the floor in the Milton Keynes shopping centre and wheeled around ordering coffee, taking the elevators and making deliveries. The robots — or the human teams operating them — competed in a new robotics challenge organized by the European Robotics League to test robots’ abilities in smart city environments. Regular shoppers were excited and bemused by the robots’ activities, some slightly wary that robots might be taking over jobs, while others at the same time were surprised to see that robots have so much difficulty with mundane tasks like opening doors. One component of the challenge was to test the robots’ social abilities in specific scenarios such as asking for help when taking the elevator, and public responses were collected in a survey1.

Researchers from the field of human–robot interaction have an important role to play to make sure we understand the complexities of human responses to robots and willingness to cooperate with robots in the short and long term. In mulling over findings from studies on human reactions to robots in our daily environments, a focus should be the importance of transparency. In particular, when encountering a robot, users should be able to quickly get a realistic idea of its purpose, capabilities and level of autonomy or teleoperation. Whereas the robots tested in Milton Keynes are intended to function autonomously, in practice robots in public environments are often at least partly controlled remotely by human operators, which is not always declared2. Humans tend to anthropomorphize and may find themselves assigning the robot its own goals and even a personality. To avoid damaging trust and ultimately our wilingness to cooperate with robots, transparency and clarity about robots’ capabilities, level of autonomy and pre-programmed behaviour needs to be in place.

The issue of transparency and explicability is a main theme in the current ongoing debate about AI ethics3. Away from the field of robotics, disembodied AI is already making a substantial impact on our lives. For example, we interact regularly with human-like text- and speech-generating AI systems. Our need to anthropomorphize is so strong that we are even inclined to engage with these systems on a social level — “Alexa, tell me a joke” — but until recently nobody was really fooled into thinking that they are talking to a human. The demonstration of Google Duplex last year4, a hyper-realistic voice assistant, opened up the possibility that this is exactly what could happen. Google quickly clarified that the system would identify itself to humans, although this may not rule out the potential for confusion.

This year GPT-2, a deep learning model for language generation developed by OpenAI, surprised the world with its remarkable ability to produce coherent passages of text that are difficult to distinguish from human written text. A recent New Yorker article about GPT-2 contains passages written by the programme5. The author mentions feeling ‘spooked’ about the experience, as GPT-2 began to make up quotes from OpenAI’s Ilya Sutskever, who was interviewed for the article: “I worried that I’d forget what he really said, because the A.I. sounded so much like him, and that I’d inadvertently use in my article the machine’s fake reporting, generated from my notes”, he writes.

Most of us would like to know when we are dealing with a system or content in which AI is involved. But what kind of transparency do we want? Do we need to know what part of the AI is automated, what technology is incorporated into the product, what its learning capabilities are and what data have been used to train the system?

An Article in this issue explores an intriguing related question: in situations where humans and AI systems cooperate, does transparency come at a price? The authors invited humans to play cooperative games with opponents that were either human or an algorithm. They show that humans don’t trust their opponent when they find out it’s an algorithm, even if it plays more cooperatively than human players. This result is worth pondering, though naturally the conclusion is not that it’s fine to conceal the fact we’re interacting with an AI system just to improve efficiency. In a News & Views on the research article, Michael Rovatsos points out that transparency could mean more than revealing whether or not AI is involved: the participants might be given further information about the AI’s learning capabilities and their ability to cooperate. It would be interesting to explore whether it is possible to regain humans’ trust if they knew more about the design of the algorithm.

Human interaction and cooperation with AI and robots is likely to be beneficial when users are offered a better and more realistic idea of the systems they are dealing with: their autonomy, purpose and limitations. And perhaps even their capability to deceive us.
`,
  },
  {
    id: 8,
    title: "Of conferences and conversations in AI",
    summary: "The organizers of Cognitive Computational Neuroscience, a relatively new AI-themed meeting held recently in Berlin, are dedicated to encouraging informal interactions and conversations to tackle the challenge of bridging scientific cultures.",
    date: "2025-05-09",
    slug: "Of-conferences-and-conversations-in-AI",
    image: "/8.png",
    thumbnail: "/8.png",
    content: `\
A critical factor in generating new ideas is bringing researchers together to foster informal discussions about science. Such gatherings have played pivotal roles in the development of artificial intelligence (AI). For example, the founding of AI as a field is attributed to the 1956 Dartmouth Summer Research Project on Artificial Intelligence. In 1979, Geoffrey Hinton and James Anderson organized an influential conference that reignited interest in neural networks, which led to the book, Parallel Models of Associative Memory.

In recent history, conferences have grown in size, making it difficult to facilitate informal discussions. Attendance at the Conference on Neural Information Processing Systems (NeurIPS), which started in 1987, has grown dramatically to over 8,000 attendees in 2018, fuelled by the boom in applications of deep learning. The subject matter of conferences also evolves over time, with NeurIPS now focusing more on AI, machine learning and statistics, and less on neuroscience.

The Conference on Cognitive Computational Neuroscience (CCN) held its third annual meeting from 13–16 September 2019 in Berlin, Germany, with 600 attendees. CCN sits at the intersection of cognitive science, computational neuroscience and AI2,3. Such interdisciplinarity provides opportunities, but also challenges. Scientists from different backgrounds often don’t speak the same language, for example. They come from a variety of scientific cultures and university departments. They assess and judge the merits of each other’s work in different ways. A challenge, then, is how to bring people from such diverse backgrounds together and get them to talk.

These challenges are widely encountered in interdisciplinary conferences. Tetsuya Ogata of Waseda University is area chair for the Conference on Robot Learning (CoRL), another newcomer in the landscape of AI-themed scientific meetings. Ogata told Nature Machine Intelligence that the CoRL organizers attempt to bridge differences in approaches between traditional roboticists, who come from mechanical and electrical engineering departments, and machine learning researchers, who come from computer or information science departments. Likewise, the recently formed Reinforcement Learning and Decision Making (RLDM) conference brings together researchers from a variety of fields, including machine learning, psychology, neuroscience and economics.

The CCN organizers sought to create an unorthodox conference. As CCN co-founder Thomas Naselaris (Medical University of South Carolina) told Nature Machine Intelligence, “Everything that we tried, every change that we made, and everything that we’re doing that’s different from other conferences is focused on increasing the opportunities for people to interact.” One goal was to be non-hierarchical, such that prominent researchers would not sit in clusters talking to each other while people flitter around them. Rather, the aim was to make conversations as horizontal as possible, across disciplines and across academic ranks.

A second goal was to provide ample and diverse opportunities for people to interact that would not occur at typical conferences. At the individual level, there was a special event called mind matching, an algorithmically optimized networking event. Participants met and engaged in conversation with someone else every 15 minutes over the course of 90 minutes.

At the group level, there were cross-collaboration breakouts. Attendees gathered in groups to discuss six challenges related to cross-collaboration between cognitive science, computational neuroscience and AI. The conversations were kick-started by short presentations from invited discussion leaders, often followed by exercises or presentations by group members. Examples of the challenges included: how can we design cognitive tasks that challenge both cognitive and neural network models, and how should we benchmark models in cognitive computational neuroscience?

At the community level, there was an event called ‘Challenges and controversies: the free-energy principle’. It featured Karl Friston (University College London), the originator of the free-energy principle for unifying global brain theories, and computational neuroscientist Jeff Beck (Duke University), with Rosalyn Moran (University of Bristol) as moderator. The format was a hybrid of discussion, debate and dialogue, with time at the end for interactions with the audience. The discussion considered whether the free-energy principle is a theory or a general framework, and how it relates to other ideas, such as Bayesian inference. Video from this event, as for all CCN talks, will be made freely available online.

One theme during the community meeting at the end of the conference was an anxiety among neuroscientists that machine learning and AI are moving far more rapidly than neuroscientists can internalize. Neuroscientists sense that there is a good deal of useful material being developed in machine learning that can reveal something important about how the brain and cognition work. But it is mostly unclear which parts of this massive machine learning effort will end up being the most important for neuroscience, rather than being algorithmic developments with an engineering focus. This tension is not bad; in fact, it is driving a lot of good work. The tension is one reason why CCN is growing, and why interdisciplinary conferences and conversations are so important for future scientific discoveries.
`,
  },
  {
    id: 9,
    title: "Return of cybernetics",
    summary: "Brain–machine interfaces were envisioned already in the 1940s by Norbert Wiener, the father of cybernetics. The opportunities for enhancing human capabilities and restoring functions are now quickly expanding with a combination of advances in machine learning, smart materials and robotics.",
    date: "2025-03-11",
    slug: "Return-of-cybernetics",
    image: "/9.png",
    thumbnail: "/9.png",
    content: `\
Norbert Wiener saw intelligent behaviour emerging from a complex interaction of feedback loops. He noticed such feedback processes, involving sensors, signals and actuators, everywhere around him, including in all living systems and in human-machine interactions. For numerous engineering problems, Wiener's cybernetic theory of feedback, communication and control successfully solved problems in the 1940s, from applications in assembly lines and rockets.

Ahead of his time, Wiener became deeply troubled about the implications of technology on society and on individuals. His outlook was pessimistic, as he worried about machines being used to control humans and to displace jobs. In his book The Human Use of Human Beings from 19501, Wiener warns against such a negative outcome for humanity and advocates for the development of technology that enhances the abilities of humans rather than controls them. In particular, Wiener describes how machines can mimic “communicative mechanisms” of the human nervous system and how this could be used for prosthetics and restoring human functions. These ideas were ahead of his time too, as the development of machines that can usefully interface with neural signals has taken some decades.

Despite the practical successes of Wiener's cybernetics theory, it was largely ignored at the famous Dartmouth meeting in 1956, where a group of prominent computer scientists led by John McCarthy came together and founded the field of artificial intelligence. The outcome of the workshop was to push a research agenda firmly focused on logical reasoning approaches. John McCarthy admitted to have coined the term artificial intelligence partly to escape association with Wiener's theory.

As a result, the term cybernetics became less known than artificial intelligence, but there is currently a revival of interest in and appreciation for Wiener's ideas, together with a renewed focus on augmentation of human abilities. Meanwhile, the development of brain–machine or neural interfaces has made substantial progress in the medical sciences since the 1970s, and the synergy with artificial intelligence research this past decade is bringing the different strands of research together.

Neural interfaces, now a topic of significant, multi-disciplinary interest, read out electrical activity from the nervous system, with the aim to decode the signal with computational methods into cognitive, sensory or motor information. This information can then be used to control a prosthetic device, robot or computer. With the advent of microelectrode technologies, invasive approaches where neural activity is measured within the skull have advanced substantially and a breakthrough result where two tetraplegic patients could steer a robot arm with their mind was reported in 2012.

In non-invasive approaches such as electroencephalography (EEG), brain activity is measured with electrodes placed on the scalp, which has the advantage that no surgery is required. Decoding the recorded signals into useful real-time information is challenging, but advances in materials engineering and machine learning in the past decade are showing promise. In an Article in this issue, Yeo et al. demonstrate a compact and lightweight, scalp-wearable device that reads out visually evoked electrical signals with high resolution. A deep learning algorithm is trained to classify the signals and can be used offline. In one experiment (with able-bodied subjects) it is shown that a wheelchair can be controlled in real time, demonstrating the practical promise of this approach.

In a separate Article, Micera et al. present an advance that could improve the utility of myoelectric prosthetics, which read out the activity of remaining muscles to control a robotic limb. The researchers develop a shared control approach, where user movement intention is decoded for dexterity but grasping is assisted with automated control for robustness.

It seems likely that the field of brain-machine interfaces will evolve quickly, especially given the promise for a multitude of medical applications. At the same time, ethical concerns arise, especially regarding invasive devices that do not just read out but also stimulate neural activity, such as treatments for Parkinson's disease and epilepsy patients4. Such neural manipulation can affect a patient's autonomy and sense of personhood5, and it is a challenging task to weigh complex neuroethical concerns against medical benefits.

Recently, Elon Musk announced plans for his company Neuralink to start clinical trials next year with a tiny chip placed inside the brain, with medical applications in mind6. But Musk's long-term agenda — enabling humans to link their brains to computers to keep pace with AI — is well known. This seems to be a diversion. Recalling Norbert Wiener's worries about the 'human use of human beings', brain-machine interfaces should be pursued with the goal to enable humans to keep and regain control of their lives.
`,
  },
  {
    id: 10,
    title: "Call to action for robotics",
    summary: "Robots can relieve humans of dangerous tasks. With the pandemic making physical contact potentially dangerous due to the risk of contagion, a new focus for robotic applications in healthcare has come into view.",
    date: "2025-01-13",
    slug: "Call-to-action-for-robotics",
    image: "/10.png",
    thumbnail: "/10.png",
    content: `\
Robots occupy a large role in popular culture, but wide adoption of robotic technology has been a slow process. A combination of technical challenges and social reluctance have made it hard to identify applications that are beneficial and acceptable to users. But the worldwide healthcare crisis caused by the pandemic has swept aside many of these hurdles, and robotic applications are appearing at high speed — from basic telepresence applications for patients and those who have to self-isolate, to semi-autonomous cleaning and disinfecting robots, to more advanced surgical robots. There is a clear willingness to try new technologies, motivated by a general feeling of urgency that societies have to adapt quickly to an unfamiliar and dangerous situation and protect healthcare workers on the frontline. Worldwide, roboticists are responding to the call to action.

  \n![VideoCAD](/insert1.png)\n\

Advances and interest in medical robotics, a slowly but steadily growing area, have sped up during the pandemic. The Perspective in this issue by Ajmal Zemmar and colleagues gives a detailed view of how robots can help and protect patients and staff in the surgical environment and complete workflow — in pre- and post-operative care, anaesthesia, and surgical procedures. A major application area that has opened for robotics is surface disinfection with ultraviolet light, in surgical environments as well as public spaces. This has brought new and interesting challenges for robotics in sensing, motion planning and manipulation, as more advanced disinfectant bots could soon take on complicated cleaning tasks in difficult areas that still require humans.

Robotic surgery has made substantial advances in recent years. However, Zemmar et al. discuss the need for further development of minimal contact or fully contactless surgery workflows that reduce the number of staff required in the operating room. A technology that supports contactless procedures — recently emerging and not a moment too soon — is magnetic navigation of surgical probes. Elsewhere in this issue, an Article by Scaglioni et al. reports an advance with magnetically guided colonoscopy. The increased number of motions a magnetically controlled endoscope can perform, in comparison with a traditional one, poses a problem for clinicians and operators, who not only have to concentrate on the task they are performing but also on how to control the system. The solution can be an increased level of autonomy of the system: either by translating simple motion commands into the more complex robotic control, or by navigating towards a target autonomously with the operator concentrating on the selection of the target.

Technologies such as these may have an impact beyond the COVID-19 crisis. A fall-out of the pandemic highlighted by the Perspective is delays and postponements of elective surgical procedures of patients, which will have long-term consequences for public health and mental well-being. In addition, many hospitals are facing financial difficulties as they are deprived of a source of income. The authors believe that acquiring new surgical robotic systems, while initially a costly investment, will have a longer-term economic benefit that goes beyond the pandemic.

Several reports have shared uplifting stories of friendly robots helping out in the pandemic, such as humanoid robots greeting patients and checking their temperature, robots reminding citizens to socially distance in public spaces, and delivery robots safely distributing food and medicine. This bodes well for the field of robotics, which is freshly motivated and inspired to find new ways for robots to help humans. At a time of social distancing and isolation, robots are re-imagined as capable of offering a human touch.

While the shift in public perception and increased willingness to work with robots are positive developments, we should take care that these technological solutions and deployments are not causing or contributing to long-term problems in society. The social, human and ethical implications still have to be thought through in adopting robotic technology. There are questions around deploying robots that currently may not be getting the attention that they deserve, such as whether the use of robots in certain healthcare settings may be enlarging the digital divide in society, and where responsibility lies when robots accidentally harm humans. The latter issue is a thorny one for medical robots that may be operating at varying levels of autonomy.

The fields of AI and robotics are well positioned to help save lives in the pandemic. The ethical questions that arise are challenging but can’t be overlooked — ethics with urgency is needed to make the most of opportunities to try the new technology, while ensuring that improvements to the healthcare system are robust and long-lasting.
`,
  },
  {
    id: 11,
    title: "Algorithms to live by",
    summary: "The challenge of practically integrating an ethical and social approach in the development and implementation of AI needs to be urgently addressed, to help restore public trust in technology.",
    date: "2024-10-14",
    slug: "Algorithms-to-live-by",
    image: "/11.png",
    thumbnail: "/11.png",
    content: `\
We may look back on 2020 as the year that exposed several long-standing structural and complex problems in society and the damage caused by attempts to address them with quick technological and algorithmic solutions. A prime example of a misguided approach to address a complex social issue is the attempt of the UK government to standardize the outcome of A-level exam predictions of individual students by implementing a formula based on past school performance. The unsurprising result was that students from disadvantaged backgrounds were affected most by downgraded exam marks, highlighting once again how algorithms used for predictions affecting individual lives tend to perpetuate and amplify entrenched divisions.

The pandemic caused by the novel coronavirus has presented huge challenges for secondary school pupils who were preparing for a transition to higher education or the job market. They had to quickly get to grips with digital technology and online-only learning. But most couldn’t sit exams, which posed a problem for countries like the UK, where exam grades weigh heavily in university admissions. Teachers’ predicted grades had to be used instead, but the government’s exam regulator Ofqual, which ensures that grades are not subject to yearly inflation, decided to use an algorithm that downgraded 40% of the results. The process caused despair among many students who looked set to miss out on university places conditionally offered to them. After a vigorous day of protest, the government abandoned the downgrading, silently acknowledging that the algorithm unfairly affected the most disadvantaged students and schools.

While the goal of standardizing exam results was in itself not a bad idea, the expectation that a simple algorithm can make fair predictions on individuals based on data of past school performance was misguided. Everything from the choice of which data are used (and what data are available in the first place) to the specific questions addressed (and by whom) are subject to societal biases that were not examined. Instead of turning to an algorithm straight away, the government could have taken on the task, long overdue, to review and overhaul the exam system, addressing inherent problems with inequality.

By postponing work that is needed to address deep structural problems in society and by trying to patch them over with technological and algorithmic fixes, society accrues what Shannon Vallor calls moral debt. The term is related to the concept of technical debt in software applications, where imperfect software is quickly brought to market, making use of patches and shortcuts, with the result that for years after deployment, additional resources have to be spent to repair and eventually replace the software. Similarly, in the decades leading up to 2020, substantial environmental and social costs have been accumulating with technological and digital transformations. 2020 may be a year of reckoning as societies can no longer put off work to address issues such as underinvestment in healthcare, environmentally unsustainable practices, and racial, gender and other social injustices.

There is a risk that AI technology is on its way to add to moral debt, either by bad fixes of problems or by producing new problems such as the rise of social media platforms, which threaten to undermine the democratic process, facial recognition in surveillance, which infringes on human rights, and an epidemic of disinformation with deepfakes. The only way forward is to recognize that there is a moral debt to pay off and to focus on developing AI that does not contribute to or wash over societal problems, and ideally helps to address them.

In the development of new AI applications in society, and in deciding whether they are sufficiently beneficial, fair and transparent to be deployed at all, it will be necessary to turn to what McLennan et al. call in this issue ‘embedded ethics’. The group of researchers in AI, robotics, philosophy and social sciences argue that it is imperative to address ethical challenges as early as possible in the development of AI technology. Developers should not only call upon ethicists when they perceive ethical problems; rather, it should be standard practice to directly involve ethicists as members of a development team or to organize regular exchanges with ethicists at every step of the process, to collaboratively identify, anticipate and address ethical, moral and legal challenges.

This year’s events call for confronting long-standing societal problems. AI technology has a role to play but not with quick algorithmic fixes. New technology can only be deployed with clear ethical processes in place and transparency in motivations and impact, to restore public trust in technology — and this will be essential when wide acceptance is crucial, as with COVID-19 vaccination programs.
`,
  },
  {
    id: 12,
    title: "Next chapter in artificial writing",
    summary: "OpenAI released a beta version of its language model, GPT-3. As artificial writing permeates our lives, the challenge is how to think clearly about what it is and what impact it could have on society.",
    date: "2024-08-12",
    slug: "Next-chapter-in-artificial-writing",
    image: "/12.png",
    thumbnail: "/12.png",
    content: `\
OpenAI, the artificial intelligence (AI) company, published a research paper in May 2020 on GPT-3, the latest version of its generative language model. More recently, OpenAI released a private beta version of GPT-3 to select users and made its API available by request. Responses in articles and social media have been swift and often laudatory, describing it as the “world’s most impressive AI” and “terrifyingly good”.

GPT-3 is a language model based on neural networks. The transformer-based model and architecture is similar to GPT-2, but the model size and dataset of GPT-3 is roughly two orders of magnitude larger. GPT-3 is trained with 175 billion parameters, using data from CommonCrawl, WebText, internet-based books corpora and English-language Wikipedia. Like GPT-2, GPT-3 can predict, or suggest, the next word or paragraph given a prompt of just a few words. This type of one-or zero-shot learning goes beyond previous natural language processing models which need many labelled examples to perform a new type of task.

Much of the buzz about GPT-3 has focused on its ability to generate text using the ‘text in, text out’ interface of the API. Users can enter a word or phrase, and text emerges. GPT-3 is so good at this that it can generate synthetic news articles that seem to be written by humans. It is easy to imagine how the technology could have a positive impact, for example, by creating sophisticated bots to assist people, providing text to compose e-mails, overcoming writer’s block, facilitating learning between teachers and students, helping people with language disorders communicate in writing, and even writing code. It is important to note that the OpenAI paper reports the performance of GPT-3 on language tasks other than text generation, including its ability to answer general knowledge questions, to translate between languages, to perform common sense reasoning and reading comprehension tasks, and so on.

There are downsides to GPT-3, and important questions about its impact on society. The OpenAI researchers discuss these issues in their paper, such as GPT-3 being used for spam, phishing, misinformation and fraudulent academic essay writing. The authors also present preliminary analyses on the limitations of GPT-3 with respect to fairness, bias, and representation. The fundamental issue here is that GPT-3 is trained on data from the internet, with its inherent biases in race, gender, religion, and other subjects. Prominent voices such as Jerome Pesenti (VP of AI at Facebook) and Anima Anandkumar (professor at Caltech and director of Machine Learning Research at NVIDIA) took to Twitter to raise concerns about bias in GPT-3 and language models, including examples of toxic language generated by GPT-3 when prompted with words such as Jews, black and women. OpenAI is aware of the problem and has introduced a toxicity filter to check GPT-3’s output. But this ignores the question of whether it is a responsible strategy in the first place to train language models by taking any data from the web simply because it is available, including from sources such as Reddit. The obvious risk is amplification of unchecked and harmful biases.

Another concern is the substantial compute time and energy impact of language models. This issue was raised last year in a paper by Emma Strubell and colleagues (see also our News Feature this month on the carbon impact of artificial intelligence) who calculated that training a ‘big’ transformer language model has the same carbon impact as five US cars over their lifetime, including fuel. Of course, GPT-3 is much bigger, with orders of magnitude more parameters, although calculating the carbon impact requires more details on the design process and hardware infrastructure. In their paper, the OpenAI authors only spend one and a half paragraphs on energy usage, in which they acknowledge the need to consider energy impact but also argue that once trained, GPT-3 is very efficient.

At a more philosophical or conceptual level, debates are raging about the degree to which such an AI tool can be called intelligent, or even scientific, rather than a clever engineering feat. One loose definition of AI is that it can perform tasks that people consider intelligent when done by humans, such as creative writing. On the other hand, literally ascribing intelligence to technology must be done with care. With its apparent ability to artificially read and write, GPT-3 is perhaps different from other forms of AI, in that writing seems more fluid, open-ended, and creative than examples of AI that can beat people in a game or classify an image. But what kind of ‘writer’ or writing tool is GPT-3? It has no consciousness, no motivation, no experience, no moral compass, no vision, no human connections and no humanity.

Despite lacking these qualities, GPT-3’s text-generation abilities are remarkable and amazingly versatile. From a selection taken from Twitter, users of the recent ‘text-in, text-out’ interface have experimented with deploying GPT-3 for mocking-up websites, writing machine learning code in Keras and of course producing creative writing, including comedy. There might be a ‘killer application’ that has not even been found yet.

At the same time, there is much work to be done to reflect on and tackle the downsides of this new tool that, like any AI technology, risks amplifying existing societal injustices and can be used in harmful ways. For the next generation of language models, it seems urgent to focus on compute and energy impact, as well as the need to incorporate more diversity and quality control.
`,
  },
  {
    id: 13,
    title: "Technology can not fix this",
    summary: "AI tools used in society often enhance inequality, affecting Black lives disproportionally. Addressing this issue will require more than technological solutions. Researchers and experts in the field are overwhelmingly white and need to engage and listen to those experiencing the harm.",
    date: "2024-07-15",
    slug: "Technology-can-not-fix-this",
    image: "/13.png",
    thumbnail: "/13.png",
    content: `\
The Black Lives Matter movement has been a wake-up call for many in academia to reflect on the pervasive effects of racial injustice, both in terms of the underrepresentation of Black researchers and the harmful effects of technology, which often plays a discriminatory role in society. While blatant racism may not always be in plain sight, many mechanisms in society are in place that cause racial discrimination, and these mechanisms are often amplified by technology. On Wednesday 10 June, thousands of researchers (and editors) around the world joined in a #Strike4BlackLives initiative (also known as #ShutDownSTEM and #ShutDownAcademia) to spend the day learning about structural racism and finding ways to counter it. This should be the start of a long journey.

Many have raised the alarm in recent years over the potential for racial discrimination inherent in AI algorithms. Black researchers Timnit Gebru and Joy Buolamwini, among others, have worked tirelessly to identify and raise awareness of racial discrimination in AI and facial recognition technologies in particular. The harmful effect of facial recognition technologies on Black people was recently demonstrated with a real-world example when Robert Williams, a Black man, was wrongfully arrested based on his face being mistakenly matched with a robbery suspect. It is a well-known problem that commercial facial recognition systems have a higher error rate for darker-skinned faces, as they are typically trained on datasets that are insufficiently diverse and phenotypically imbalanced. The solution to fairer AI systems may seem to be training on better, less biased datasets. However, this ignores the deeper problem with technologies like facial recognition, which are not separate from the social structures in which they are built. Emily Denton, a research scientist on Google’s Ethical AI team, tweeted recently “AI research and development cannot be decoupled from the social relations that structure our world and AI failures are intrinsically linked to asymmetries with respect to who is driving research agendas and shaping incentives”. Answers to questions such as ‘who is developing these algorithms and why’, ‘where does the training data (typically images scraped from the web) come from’ and ‘who decides on how the tools are used’ will reveal numerous underlying structural imbalances.

One fundamental problem is that among those developing state-of-the-art algorithms, in computer science departments and the tech industry, the percentage of Black researchers is very low. While 6% of undergraduates in US computer science programmes are Black, this drops to 1–2% at the PhD and faculty level, while a 2018 report found that less than 2.5–4% of the workforce across major AI companies are Black. The importance of representation is clear when noting how activism among scientists and engineers can be pivotal in changing a company or organization’s course of direction. IBM recently announced that they would no longer sell or develop facial recognition technologies, Amazon announced a one-year moratorium in selling their facial recognition systems to law enforcement, while Microsoft stated they would not sell such technologies to police forces until a national law governing their use is brought into place. This is welcome progress, but must not replace governmental action to ensure that less visible companies do not fill this gap.

Beyond facial recognition, there are many more algorithms used in society that discriminate against Black people, such as credit risk scoring and predictive policing technologies. As Cathy O’Neil discussed in her book Weapons of Math Destruction, big data gathering increases inequality and too often lends legitimacy to new forms of social and political oppression. One example is that the gathering of crime data, including for nuisance crime, reinforces the presence of police in poor and mostly Black neighbourhoods. This impacts arrests in those neighbourhoods, producing more crime data and a harmful feedback loop. Cathy O’Neil mentions that those behind big data models like predictive policing often insist that their model, unlike humans, is blind to race and ethnicity. But it’s a mistake to think technology can ever be neutral, as it is simply impossible to abstract away social context. In fact, as Ruha Benjamin argues in her recent book Race after Technology, race itself is a tool that is deeply embedded in society.

To fully grasp these issues, it will be essential to work with those in marginalized communities who have experienced the harmful effects of technologies. Conferences like the Association for Computing Machinery’s meeting on Fairness, Accountability and Transparency (FAccT), which took place in Barcelona earlier this year, and the upcoming workshop ‘Participatory approaches in machine learning’ at the International Conference on Machine Learning seek to address the power imbalance by involving those who are directly impacted by machine learning systems. It seems an important and stimulating way forward for the design of AI tools to seek awareness of the power dynamics surrounding the application of those tools from the start.

At the same time, it is exhausting for Black scholars to keep explaining what they are grappling with on a daily basis in the face of a usual white audience who have not lived through the same experiences and struggle to accept structural racism exists. It is up to those with the power to shape the AI community, including science journals, to actively engage with issues around structural racism and ask difficult, often uncomfortable questions about how AI technologies might consolidate, or even intensify, racism in society.
`,
  },
  {
    id: 14,
    title: "Artificial intelligence in a crisis needs ethics with urgency",
    summary: "Artificial intelligence tools can help save lives in a pandemic. However, the need to implement technological solutions rapidly raises challenging ethical issues. We need new approaches for ethics with urgency, to ensure AI can be safely and beneficially used in the COVID-19 response and beyond.",
    date: "2024-06-22",
    slug: "Artificial-intelligence-in-a-crisis-needs-ethics-with-urgency",
    image: "/14.png",
    thumbnail: "/14.png",
    content: `\
The novel coronavirus pandemic (COVID-19) is the largest global crisis in a generation, hitting the world at a time when artificial intelligence (AI) is showing potential for widespread real-world application. We are currently seeing a rapid increase in proposals for how AI can be used in many stages of pandemic prevention and response. AI can aid in detecting, understanding and predicting the spread of disease, which can provide early warning signs and inform effective interventions1. AI may improve the medical response to the pandemic in several ways: supporting physicians by automating aspects of diagnosis2, prioritizing healthcare resources3, and improving vaccine and drug development4. AI also has potential applications beyond immediate response, such as in combating online misinformation about COVID-195.

The current crisis presents an unprecedented opportunity to leverage AI for societal benefit. However, the urgency with which new technologies must be deployed raises particularly challenging ethical issues and risks. There is growing concern that the use of AI and data in response to COVID-19 may compromise privacy and civil liberties by incentivizing the collection and processing of large amounts of data, which may often be private or personal6. More broadly, although AI clearly has a great deal to offer, we must be careful not to overestimate its potential. Its efficacy will heavily depend on the reliability and relevance of the data available. With the worldwide spread of COVID-19 occurring so quickly, obtaining sufficient data for accurate AI forecasting and diagnosis is challenging. Even where AI models are strictly speaking accurate, they may have differential impacts across subpopulations, with harmful consequences that are difficult to predict in advance7. A further concern is that the lack of transparency in AI systems used to aid decision-making around COVID-19 may make it near impossible for the decisions of governments and public officials to be subject to public scrutiny and legitimation8. Finally, the current crisis may have longer-term impacts on public trust and norms around the use of AI in society. How these develop will depend on perceptions of how successful and responsible use of AI to address COVID-19 is.

### The challenge of ethics in a crisis
Robust ethics and risk assessment processes are needed to ensure AI is used responsibly in response to COVID-19. However, implementing these at a time of crisis is far from straightforward, especially where new technologies need to be deployed at unprecedented speed and scale. For example, forecasting models have to be available at the early stages of disease spread and make use of all possible data to productively inform policy interventions. Current processes for ethics and risk assessment around uses of AI are still relatively immature, and the urgency of a crisis highlights their limitations.

Much work in AI ethics in recent years has focused on developing high-level principles, but these principles say nothing about what to do when principles come into conflict with one another9. For example, principles do not tell us how to balance the potential of AI to save lives (the principle of ‘beneficence’) against other important values such as privacy or fairness. One common suggestion for navigating such tensions is through engagement with diverse stakeholder groups, but this may be difficult to enact with sufficient speed at times of crisis.

When new technologies may pose unknown risks, we would ordinarily try to introduce them in gradual, iterative ways, allowing time for issues to be identified and addressed. In the context of a crisis, however, there is a stark trade-off between a cautious approach and the need to deploy technological solutions at scale. For example, there may be pressure to rely on systems with less human oversight and potential for override due to staff shortages and time pressures, but this must be carefully balanced against the risk of failing to notice or override crucial failures.

This does not mean that ethics should be neglected at times of crisis. It only emphasizes that we must find ways to conduct ethical review and risk assessment with the same urgency that motivates the development of AI-based solutions.

### Doing ethics with urgency
We suggest that ethics with urgency must at a minimum incorporate the following components: (1) the ability to think ahead rather than dealing with problems reactively, (2) more robust procedures for assuring the behaviour and safety of AI systems, and (3) building public trust through independent oversight.

First, ethics with urgency must involve thinking through possible issues and risks as thoroughly as possible before systems are developed and deployed in the world. This need to think ahead is reflected in the notion of ‘ethics by design’: making ethical considerations part of the process of developing new applications of AI, not an afterthought10. For example, questions such as ‘what data do we need and what issues might this raise?’ and ‘how do we build this model so that it is possible to interrogate key assumptions?’ need to be considered throughout the development process. This means that experts in ethics and risk assessment need to be involved in teams developing AI-based solutions from the beginning, and much clearer guidelines are needed for engineers and developers to think through these issues. An ethics by design approach should also be supplemented with more extensive foresight work, looking beyond the more obvious and immediate ethical issues, and considering a wider range of longer-term and more systemic impacts. By synthesizing diverse sources of expertise, established foresight methodologies can be used to identify new risks and key uncertainties likely to shape the future, and use this to make better informed decisions today11.

Second, where applications of AI are used at scale in safety-critical domains such as healthcare, ensuring the safety and reliability of those systems across a range of scenarios is of crucial importance. Finding ways to rapidly conduct robust testing and verification of systems will therefore be central to doing ethics with urgency. We suggest that the application of AI in crisis scenarios should in particular be heavily informed by research on best practices for the verification and validation of autonomous systems12. It may also be worthwhile for governments to fund further work on methods for establishing the reliability of machine learning systems across a range of circumstances, particularly where those systems may be deployed in high-stakes crisis scenarios.

Third, an important aspect of ethics with urgency is building public trust in how AI is being used. If governments use AI systems in ways perceived to be either mistaken or problematically value-laden, this could result in a loss of public trust severe enough to drastically reduce support for beneficial uses of AI not just in this crisis, but also in the future. Building public trust around new uses of technology may be particularly challenging in crisis times, where the need to move fast makes it easier for governments to fall back on opaque and centralized forms of decision-making. Several analyses of past pandemics have argued that transparency and public scrutiny are essential for maintaining public trust13. An independent oversight body, responsible for reviewing any potential risks and ethical issues associated with new technologies and producing publicly available reports, could help ensure public transparency. This oversight body could, among other approaches, make use of techniques such as ‘red teaming’ to rigorously challenge systems and their assumptions, unearthing any limitations and biases in the applications being proposed14. Red teaming is widely used in security settings, but can be applied broadly: at its core, red teaming is a way of challenging the blind spots of a team by explicitly looking for flaws from an outsider or adversarial perspective. As well as allowing developers to identify and fix issues before deployment, such processes could help assure public stakeholders that the interests and values of different groups are being thoroughly considered, and that all eventualities are prepared for.

### Conclusion
As the COVID-19 pandemic illustrates, times of crisis can necessitate rapid deployment of new technologies in order to save lives. However, this urgency both makes it more likely that ethical issues and risks will arise, and makes them more challenging to address. Rather than neglecting ethics, we must find ways to do ethics with urgency too. We strongly encourage technologists, ethicists, policymakers and healthcare professionals to consider how ethics can be implemented at speed in the ongoing response to the COVID-19 crisis. If ethical practices can be implemented with urgency, the current crisis could provide an opportunity to drive greater application of AI for societal benefit, and to build public trust in such applications.
`,
  },
  {
    id: 15,
    title: "Finding a role for AI in the pandemic",
    summary: "Expectations are high for AI to help fight COVID-19. But before AI tools can make an impact, global collaboration and high-quality data and model sharing are needed.",
    date: "2024-03-16",
    slug: "Finding-a-role-for-AI-in-the-pandemic",
    image: "/15.png",
    thumbnail: "/15.png",
    content: `\
The worldwide health emergency caused by the spread of the SARS-CoV-2 virus has quickly mobilized scientists, and among those stepping up are machine learning researchers. In many ways, the field has been more than ready to answer the call to action. Having advanced at a fast pace in the past two decades, the machine learning community is accustomed to prompt sharing of results, preprint posting and open sourcing of code. Moreover, the past few years have seen a growing interest from the community in putting machine learning models to use in ways that benefit society and promote sustainable development goals. Major machine learning conferences like the Conference on Neural Information Processing Systems and the International Conference on Machine Learning have run popular workshops on ‘AI for social good’ applications.

There are many ways that machine learning researchers can contribute, such as in epidemic modelling, diagnosis, predicting patient outcomes and triaging, drug discovery, detecting misinformation on social media and identifying regions where aid is most needed in low-income countries. But with this surge of attention, blind spots have become visible. Across three Comments in this issue (by Miguel Luengo-Oroz et al., Yipeng Hu et al. and Nathan Peiffer-Smadja et al.), experts highlight the challenges that need to be tackled before AI can have a beneficial global impact. As Luengo-Oroz et al. point out, a first challenge is knowing where to start with developing AI tools that can be most effective, which requires close cooperation with practitioners at the healthcare frontline. The best solutions may involve adapting already validated systems rather than building new tools from scratch. Furthermore, Hu et al. describe how clinical needs are evolving as the pandemic is moving through different stages, from early detection and anticipation, to containment and mitigation and finally eradication. During these transitions, the specific types of AI models may need to change too.

All three Comments emphasize that good prediction models need large, inclusive data collaborations. So far, many new predictive and diagnostic models have been developed based on locally available data pipelines. The generation of such new models can be valuable, but represent only a first step, and the translation to clinically useful applications in new environments requires further work and validation. A substantial, global collaborative effort is required to promote immediate sharing of well-documented, anonymized datasets to develop AI models that can be widely used.

Another challenge is that while sharing of code may be widely practised, this is not universally the case. The problem was highlighted prominently for the pandemic prediction model developed at Imperial College, which informed the UK government strategy, and whose developers acknowledged that the “thousands of lines of undocumented C” would require multiple days of training in order for others to use the code. Work quickly began to refactor and document the code given the significance of the model predictions.

This case points to a related issue, which is that even if code is available, this does not necessarily translate into reusability. To make code reproducible and useful for wider implementation, transparent documentation of model design, assumptions, inputs and hyperparameters are needed, as well as hardware requirements and licensing details. However, the right incentives need to be in place for researchers to focus more on developing reusable software and constructing high-quality datasets, rather than on reporting novel performance results. The San Francisco Declaration on Research Assessment, signed by over 1,950 organizations (including Springer Nature), encourages a rethinking of how scientific research outputs are evaluated beyond conventional journal metrics.

There are many lessons to be learned for the world of scientific research from this pandemic, and that includes scientific publishing, which needs to cope with the overwhelming amount of research papers that have been produced on COVID-19. Researchers in robotics had their wake-up call in 2011 after tsunami waves struck Japan’s Fukushima Daiichi nuclear power plant. Despite impressive robot demonstrations in the preceding decade, robots turned out to be of little help in the most urgent stages of the disaster, to the disappointment of many researchers. The field came together to develop robots better equipped to deal with realistic, challenging environments and scenarios, such as by organizing disaster challenges that stimulate innovation and test robots’ readiness to deal with emergency situations.

Like a nuclear or natural disaster, the pandemic is fast moving and events are difficult to predict. Approaches are needed that can be quickly adapted and of use in various local conditions and countries. The health emergency caused by COVID-19 quickly got the attention of the machine learning field. Now that many of the challenges around data and model sharing, local adaptation and prioritizing work where clinical needs are greatest have been identified, more AI solutions can be expected that are inclusive and will make a global impact.
`,
  },
  {
    id: 16,
    title: "Machine Learning for COVID-19 needs global collaboration and data-sharing",
    summary: "The COVID-19 pandemic poses a historical challenge to society. The profusion of data requires machine learning to improve and accelerate COVID-19 diagnosis, prognosis and treatment. However, a global and open approach is necessary to avoid pitfalls in these applications.",
    date: "2024-01-10",
    slug: "Machine-Learning-for-COVID-19-needs-global-collaboration-and-data-sharing",
    image: "/16.png",
    thumbnail: "/16.png",
    content: `\
On 31 December 2019, the first cases of a viral pneumonia with unknown aetiology were reported in the city of Wuhan, China. In the following weeks, the Chinese authorities and the World Health Organization (WHO) announced the discovery of a novel coronavirus and its associated disease: SARS-CoV-2 and COVID-19, respectively. On 21 April 2020, the number of cases of COVID-19 exceeded 2.4 million and the death toll exceeded 170,000 worldwide1. The outbreak of COVID-19 represents a major and urgent threat to global health. While the unprecedented speed of the COVID-19 spread partly finds its roots in our increasingly globalized society, the global sharing of scientific data also offers a promising tool to fight the disease. In the past four months, more than 12,400 articles have been published2 and scientific data collected from thousands of patients have been released3. The majority of these studies follow the standard scientific method: that is, investigate a few hypotheses at a time on a controlled sample. While undeniably successful, this standard method suffers from two well-known challenges, both critical to our pandemic situation: (1) it requires considerable expertise and human input and (2) it only considers a handful hypotheses at a time. Machine learning (ML) has been used to meet these challenges in various pathologies4,5, including infectious diseases6. Herein, we describe two areas where ML could supplement standard statistical methods in the COVID-19 pandemic, discuss the practical challenges that such a ML approach entails, and advocate for a global collaboration and data-sharing.

### ML to alleviate the workload of medical experts
While standard statistical methods can provide the first results necessary in an emergency, they often require considerable human resources, which are precisely lacking in such context. Health systems found themselves quickly overwhelmed and the potential for data analysis, particularly in clinical research, was limited by the amount of work required. ML techniques can decrease the time required to produce automated analyses and allow artificial intelligence practitioners to support clinicians. For example, medical imaging studies show that chest computed tomography (CT) scans can be used to detect COVID-19 lesions7,8. However, such studies typically require each scan to be reviewed by a trained radiologist, who could otherwise be working on the front lines. ML may alleviate this task: recent supervised classifiers trained over a large dataset of 400,000 chest X-Rays achieved a mean area under the receiver operating characteristic curve (false positive rate versus true positive rate) of 94% for the diagnosis of 14 distinct lung pathologies9. Furthermore, preliminary studies based on a few hundred chest CT scans suggest that COVID-19 can be automatically diagnosed with ML10. However, the use of ML of medical images to diagnose or prognose COVID-19 remains currently limited to relatively small cohorts. These studies thus poorly control for the numerous confounds (for example, age, corpulence) that the algorithms may detect from chest images. A promising strategy is to pre-train ML models from larger datasets of similar images, thus learning common features to compute, which can then be used to facilitate training from COVID-19 images. This strategy has been used again and again in computer vision in recent years, to achieve impressive results in tasks with few labelled examples11.

### ML to accelerate the screening of treatments
Standard methods only consider a handful hypotheses at a time. For example, among more than 1,200 clinical trials that have been registered to identify treatments for COVID-19, the majority focus on a unique drug or a couple of drugs, hand-selected on rationales of varying relevance12. ML can broaden such a screening and selection process by simultaneously considering several potential antiviral agents, relying on DNA sequences and/or protein structure, including potential drug binding sites of SARS-CoV-2, to predict interactions between drugs and the virus, and thus shortlisting promising candidate treatments13,14. ML has been used in other infectious diseases in a similar fashion15: for example, a deep neural network was successfully trained to screen the activity of more than 100 million molecules on Escherichia coli16. In the same way, a large spectrum of vaccine candidates could be screened based on their potential to elicit an effective immune response, for example, by presenting the spike protein S that follows a SARS-CoV-2 infection17. Nonetheless, these potentially fruitful avenues should not hide the challenges of therapeutic research based on ML. First, ML cannot accelerate basic biology, and even the prediction of protein folding remains a remarkably difficult problem18. In the case of vaccines, there is therefore a necessary waiting period. Second, a major ethical concern is the temptation to bypass proper clinical trials: working with very small cohorts, not using adequate design, or omitting inclusion and exclusion criteria have already be reported in the recent hydroxychloroquine-based treatment research19. This risk could dramatically increase with ML algorithms. Indeed, algorithms such as deep neural networks are ‘general approximators’: they can be trained to fit any objective on a dataset by, for example, memorizing the diagnosis of every patients. ML algorithms can only be evaluated conclusively by assessing their ability to accurately predict an independent test set — an approach that necessitate large datasets and a priori inclusion and exclusion criteria.

### A major need for data sharing
While standard statistical analyses are adapted for many clinical and epidemiological challenges, ML is essential to accelerate the analysis of complex and large datasets such as large genomic or medical imaging datasets. Overall, ML is thus promised to supplement rather than supersede standard methods used for diagnoses, prognosis and treatment. However, two major challenges currently limit the potential impact of ML. First, ML algorithms are notoriously difficult to interpret. While visualization tools may highlight the combination of variables that led an algorithm to make a particular prediction, healthcare professionals must be aware that, like humans, ML can easily be affected by systematic biases (for example, scanning device, patient’s age and so on). Special pedagogical efforts must thus be made in both scientific reports and in the clinics to maintain a healthy scepticism when it comes to ML findings. Second, the lack of large healthcare, clinical, imaging and genetic public repositories leads each institution to locally develop its own analytical pipeline on its own small dataset, which significantly limits the generalizability of the results. While this issue is not specific to ML, the ability of modern algorithms to encompass heterogeneous datasets should drive us to both (1) share the de-anonymized raw data used in each clinical study, and (2) favour the development of large cohorts. The International Severe Acute Respiratory and emerging Infection Consortium (ISARIC) initiative aims to provide a large and shared clinical database on COVID-19 patients20. Other institutions have signed data-sharing agreements to ensure that data is shared widely and rapidly21,22, and can inform new hypotheses, but this is still done in a piecemeal fashion, making it difficult to make the most of the data generated daily during the pandemic. Not only will the quality of the standard and ML models directly depend on the size, quality and representativeness of such databases, but they will be critical to support effective interventions across different countries and types of healthcare facilities6. Open sharing of clinical databases requires significant care to properly manage regulatory and data privacy issues. Rapidly resolving these issues can be particularly challenging during a pandemic, when many public institutions are not operating normally. However, until we meet these challenges, ML may not keep its promises to help fight the virus.

### Conclusion
The COVID-19 outbreak is not the first pandemic and is unlikely to be the last. For the first time, however, our societies have the means to provide a coordinated, evidence-based, fair and global public-health response. While the efficiency of this response may partly depend on ML, it depends even more crucially on our ability to set up global collaborations and data-sharing agreements that can accelerate the discovery and validation of promising interventions.
`,
  },
  {
    id: 17,
    title: "A match for virtual conferences",
    summary: "Scientists have been getting concerned about the carbon footprint of international meetings and have been asking whether travelling to conferences is the best use of their time and funds. 2020 is turning out to be the year that many organizers decide to go virtual — and this was before COVID-19.",
    date: "2023-12-05",
    slug: "A-match-for-virtual-conferences",
    image: "/17.png",
    thumbnail: "/17.png",
    content: `\
The conference on Neural Information Processing Systems (NeurIPS), the largest annual machine learning conference, struggles with a year on year growing number of submissions and registrations, as attested by images of overcrowded poster sessions on social media last December. A positive outcome of the conference was the success of local meetups across the world, where participants gathered to attend online talks, hold discussions and engage in social interactions. Other fields are experimenting with the local meetup format: the photonics community, for instance, held its first major virtual meeting in January 2020, with 66 local meetups to encourage networking and interactions.

The International Conference on Learning Representations (ICLR) was held on 26 April to 1 May 2020, and would have been the first major machine learning conference in Africa. Instead, it became fully virtual. The organizers redesigned the conference, which in many ways improved accessibility, not least by reducing the registration fee to US$100. Each paper had a pre-recorded five-minute video presentation with synchronized slides, a chatroom channel to ask questions, and live video ‘poster sessions’ scheduled across time zones. For many, this was preferable to the crowded environment typical of poster sessions in physical conferences, as attendees could manoeuvre through talks and ask questions at their own pace. To create the social spontaneity of a conference coffee break, ICLR Town was introduced to let people, as avatars, wander around a virtual town, starting or joining video chats with those ‘close by’.

With COVID-19 preventing in-person meetings, at least temporarily, the time is ripe to explore the feasibility and advantages of virtual conferences. In the field of computational neuroscience, researchers have embraced the challenge, with ambitious plans to move online in a new series of conferences and a summer school. The neuromatch 1.0 conference was held online in March 2020, with some 3,000 registrants. Neuromatch 2.0 is scheduled for 25–27 May 2020, and neuromatch academy is a three-week online summer school planned for July 2020.

Neuromatch has several advantages: no travel, no overhead associated with in-person events, and minimal software costs. The management and organization are handled by students, postdocs and faculty volunteers, who are committed to making the programmes a success. An essential component is collaborative tools such as Crowdcast, Zoom, Quire and Slack. From a participant’s perspective, registration for the conference is free, and the cost of the academy is free for the observer track (for those who want to ‘sit in’) or very low for the interactive track, where the money helps to pay the teaching assistants.

One major challenge for neuromatch, as for all online conferences, is interaction. Being physically at a conference has the advantage of serendipitously meeting people, having spontaneous discussions and making new acquaintances. Undaunted, the organizers of neuromatch believe that virtual conferences can, with the right tools, promote social and professional interactions, perhaps even better than in-person conferences. As organizer Brad Wyble (Penn State University) told Nature Machine Intelligence: “In the personal social setting, you do have that sense of camaraderie, just from physical presence, hanging out in a dense social atmosphere. But the downside is that the likelihood of meeting the right people is very much due to chance.”

The challenge is how to bring people together online by intellectual matchmaking. As it happened, Daniel Acuna (Syracuse University) and Titipat Achakulvisut (University of Pennsylvania), working in the lab of neuromatch organizer Konrad Kording (University of Pennsylvania), had created an algorithm that matched researchers based on inputs such as their scientific abstracts. At the in-person Cognitive Computational Neuroscience conferences in 2018 and 2019, the algorithm was used to match researchers with similar interests for one-on-one conversations, at an event called mind matching. The mind matching algorithm is being deployed in neuromatch with the goal of turning a perceived limitation of online events into a strength. As neuromatch organizer Dan Goodman (Imperial College London) told Nature Machine Intelligence: “You can not only replicate the experience of randomly meeting new people, but actually do better than that: you meet the right new people, because you can be directed to the people who you actually want to talk to.”

Because COVID-19 has disrupted the training and careers of graduate students, postdoctoral fellows and early-career scientists, neuromatch academy was created as a massive online computational neuroscience summer school. As Megan Peters, chair of the executive committee, told Nature Machine Intelligence: “We have a lot of vulnerable young scientists at a critical stage in their careers, not being able to go to conferences and network, and not being able to go to summer schools to learn skills and make connections. We are responding to that in force.” The academy will provide a highly interactive platform, informed by mind matching, for grouping students, teaching assistants and mentors into pods for integrated lectures, hands-on tutorials and projects.

Conference organizers from all sciences will learn much this year about what tools and approaches work well for virtual conferences and schools. When in-person meetings become feasible again, a complete return to previous practices is unlikely. Conference organizers will make considered choices about the best format for events, limiting travel where possible and making the most of virtual tools, boosting accessibility to scientific events for all researchers.
`,
  },
];

export function generateStaticParams() {
  return [
    { slug: "New-AI-agent" },
    { slug: "The-cost-of-thinking" },
    { slug: "MIT-Energy-Initiative" },
    { slug: "Creating-AI-that-matters" },
    { slug: "Checking-the-quality-of-materials" },
    { slug: "A-voice-for-tech-workers" },
    { slug: "Deceiving-possibilities" },
    { slug: "Of-conferences-and-conversations-in-AI" },
    { slug: "Return-of-cybernetics" },
    { slug: "Call-to-action-for-robotics" },
    { slug: "Algorithms-to-live-by" },
    { slug: "Next-chapter-in-artificial-writing" },
    { slug: "Technology-can-not-fix-this" },
    { slug: "Artificial-intelligence-in-a-crisis-needs-ethics-with-urgency" },
    { slug: "Finding-a-role-for-AI-in-the-pandemic" },
    { slug: "Machine-Learning-for-COVID-19-needs-global-collaboration-and-data-sharing" },
    { slug: "A-match-for-virtual-conferences" },
  ];
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  // simple markdown-ish rendering for headings & paragraphs
  const lines = article.content.split("\n").filter((l) => l.trim() !== "");
  // emphasize specific words across content
  const emphasizeRegex = /(\b(?:criticism|Amazon|Microsoft|protests| technical challenges and social reluctance| call to action|autonomy|uplifting stories| Campaign to Stop Killer Robots| collection of robots took to the floor)\b)/gi;

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
              // If a line contains the word 'criticism', highlight it
              if (emphasizeRegex.test(trimmed)) {
                const content = trimmed.replace(
                  emphasizeRegex,
                  "<span class='text-green-500 font-extrabold'>$1</span>"
                );
                return (
                  <p
                    key={idx}
                    className="text-base md:text-lg font-semibold text-foreground mb-2"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                );
              }
              return (
                <p key={idx} className="text-base md:text-lg font-semibold text-foreground mb-2">
                  {trimmed}
                </p>
              );
            }

            // ...existing code...

            // Default paragraph — highlight 'criticism' when it appears
            if (emphasizeRegex.test(trimmed)) {
              const content = trimmed.replace(
                emphasizeRegex,
                "<span class='text-green-500 font-extrabold'>$1</span>"
              );
              return (
                <p
                  key={idx}
                  className="text-base md:text-lg text-foreground mb-4"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              );
            }
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
