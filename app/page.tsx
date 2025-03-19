"use client"

import { Mail, GitlabIcon as GitHub, Globe, Phone } from "lucide-react"
import React from "react"

export default function Home() {
  const [activeFilter, setActiveFilter] = React.useState("all")
  const [searchTerm, setSearchTerm] = React.useState("")
  const [preprints, setPreprints] = React.useState(true) // State to track if preprints are visible

  // Publication data
  const publications = [
    {
      id: 1,
      title: "Optimized glycemic control of type 2 diabetes with reinforcement learning: a proof-of-concept trial",
      authors: 'Wang, G., Liu, X., Ying, Z., Yang, G., Chen, Z., Liu, Z., ... & <span class="font-semibold">Lu, Yuxing</span>',
      journal: "Nature Medicine",
      year: "2023",
      tags: ["Medical AI", "Reinforcement Learning", "Diabetes"],
      isFirstAuthor: false,
      type: "peer-reviewed",
    },
    {
      id: 2,
      title: "RAG and RAU: A survey on retrieval-augmented language model in natural language processing",
      authors: 'Hu, Y., & <span class="font-semibold">Lu, Yuxing</span>',
      journal: "arXiv preprint arXiv:2404.19543",
      year: "2024",
      tags: ["NLP", "RAG", "Survey"],
      isFirstAuthor: false,
      type: "preprint",
    },
    {
      id: 3,
      title: "MedKPL: a heterogeneous knowledge enhanced prompt learning framework for transferable diagnosis",
      authors: '<span class="font-semibold">Lu, Yuxing</span>, Liu, X., Du, Z., Gao, Y., & Wang, G.',
      journal: "Journal of Biomedical Informatics",
      year: "2023",
      tags: ["Medical AI", "NLP", "Knowledge Graph", "Prompt Learning"],
      isFirstAuthor: true,
      type: "peer-reviewed",
    },
    {
      id: 4,
      title: "An integrated deep learning approach for assessing the visual qualities of built environments utilizing street view images",
      authors: 'Zhao, X., <span class="font-semibold">Lu, Yuxing</span>, & Lin, G.',
      journal: "Engineering Applications of Artificial Intelligence",
      year: "2024",
      tags: ["CV", "Urban Planning", "Street View"],
      isFirstAuthor: false,
      type: "peer-reviewed",
    },
    {
      id: 5,
      title: "Medical knowledge-enhanced prompt learning for diagnosis classification from clinical text",
      authors: '<span class="font-semibold">Lu, Yuxing</span>, Zhao, X., & Wang, J.',
      journal: "The 61st Annual Meeting of the Association for Computational Linguistics",
      year: "2023",
      tags: ["NLP", "Medical AI", "Knowledge Graph", "Prompt Learning"],
      isFirstAuthor: true,
      type: "peer-reviewed",
    },
    {
      id: 6,
      title: "Accurate estimation of biological age and its application in disease prediction using a multimodal image Transformer system",
      authors: 'Wang, J., Gao, Y., Wang, F., Zeng, S., Li, J., Miao, H., ... & <span class="font-semibold">Lu, Yuxing</span>',
      journal: "Proceedings of the National Academy of Sciences",
      year: "2024",
      tags: ["Medical AI", "CV", "Biological Age", "Disease Prediction"],
      isFirstAuthor: false,
      type: "peer-reviewed",
    },
    {
      id: 7,
      title: "Self-improving generative foundation model for synthetic medical image generation and clinical applications",
      authors: 'Wang, J., Wang, K., Yu, Y., <span class="font-semibold">Lu, Yuxing</span>, Xiao, W., Sun, Z., ... & Gao, Y.',
      journal: "Nature Medicine",
      year: "2024",
      tags: ["Medical AI", "CV", "Reinforcement Learning","Generative Models"],
      isFirstAuthor: true,
      type: "peer-reviewed",
    },
    {
      id: 8,
      title: "Millimeter-scale magnetic implants paired with a fully integrated wearable device for wireless biophysical and biochemical sensing",
      authors: 'Wan, J., Nie, Z., Xu, J., Zhang, Z., Yao, S., Xiang, Z., ... & <span class="font-semibold">Lu, Yuxing</span>',
      journal: "Science Advances",
      year: "2024",
      tags: ["Sensing", "Wearable Devices"],
      isFirstAuthor: false,
      type: "peer-reviewed",
    },
    {
      id: 9,
      title: "Assessing and interpreting perceived park accessibility, usability and attractiveness through texts and images from social media",
      authors: 'Zhao, X., <span class="font-semibold">Lu, Yuxing</span>, Huang, W., & Lin, G.',
      journal: "Sustainable Cities and Society",
      year: "2024",
      tags: ["Urban Planning", "CV", "Social Media", "Accessibility"],
      isFirstAuthor: false,
      type: "peer-reviewed",
    },
    {
      id: 10,
      title: "Multiomics dynamic learning enables personalized diagnosis and prognosis for pancancer and cancer subtypes",
      authors: '<span class="font-semibold">Lu, Yuxing</span>, Peng, R., Dong, L., Xia, K., Wu, R., Xu, S., & Wang, J.',
      journal: "Briefings in Bioinformatics",
      year: "2023",
      tags: ["Multiomics", "Cancer", "Machine Learning"],
      isFirstAuthor: true,
      type: "peer-reviewed",
    },
    {
      id: 11,
      title: "ClinicalRAG: Enhancing Clinical Decision Support through Heterogeneous Knowledge Retrieval",
      authors: '<span class="font-semibold">Lu, Yuxing</span>, Zhao, X., & Wang, J.',
      journal: "The 62nd Annual Meeting of the Association for Computational Linguistics",
      year: "2024",
      tags: ["NLP", "Knowledge Graph", "Medical AI", "RAG"],
      isFirstAuthor: true,
      type: "peer-reviewed",
    },
    {
      id: 12,
      title: "Concentrated Reasoning and Unified Reconstruction for Multi-Modal Media Manipulation",
      authors: 'Zhao, W., <span class="font-semibold">Lu, Yuxing</span>, Jiao, G., & Yang, Y.',
      journal: "ICASSP 2024 IEEE International Conference on Acoustics, Speech and Signal Processing",
      year: "2024",
      tags: ["Multi-Modal", "Media Manipulation", "CV"],
      isFirstAuthor: false,
      type: "peer-reviewed",
    },
    {
      id: 13,
      title: "Biomedical Knowledge Graph: A Survey of Domains, Tasks, and Real-World Applications",
      authors: '<span class="font-semibold">Lu, Yuxing</span>, Goi, S.Y., Zhao, X., & Wang, J.',
      journal: "arXiv preprint arXiv:2501.11632",
      year: "2025",
      tags: ["Knowledge Graph", "Medical AI", "Multiomics", "Survey"],
      isFirstAuthor: true,
      type: "preprint",
    },
    {
      id: 14,
      title: "Exploring Temporal and Spatial Patterns and Nonlinear Driving Mechanism of Park Perceptions: A Multi-Source Big Data Study",
      authors: 'Zhao, X., Huang, H., Lin, G., & <span class="font-semibold">Lu, Yuxing</span>',
      journal: "Sustainable Cities and Society",
      year: "2025",
      tags: ["Urban Planning", "CV", "Park Perceptions"],
      isFirstAuthor: false,
      type: "peer-reviewed",
    },
    {
      id: 15,
      title: "Enhancing multimodal knowledge graph representation learning through triple contrastive learning",
      authors: '<span class="font-semibold">Lu, Yuxing</span>, Zhao, W., Sun, N., & Wang, J.',
      journal: "Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence",
      year: "2024",
      tags: ["Knowledge Graph", "Contrastive Learning", "NLP"],
      isFirstAuthor: true,
      type: "peer-reviewed",
    },
    {
      id: 16,
      title: "Dual-Color Granularity Alignment for Text-Based Person Search",
      authors:
        "W Zhao, <span class=\"font-semibold\">Lu, Yuxing</span>, G Jiao, Y Yang",
      journal:
        "ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and…",
      year: "2024",
      tags: ["Text-Based Person Search", "Alignment", "CV"],
      isFirstAuthor: false,
      type: "peer-reviewed",
    },
    {
      id: 17,
      title:
        "Cross-modal alignment with synthetic caption for text-based person search",
      authors:
        "W Zhao, <span class=\"font-semibold\">Lu, Yuxing</span>, Z Liu, Y Yang, G Jiao",
      journal:
        "International Journal of Multimedia Information Retrieval 14 (2), 11",
      year: "2025",
      tags: ["Text-Based Person Search", "Cross-modal", "CV"],
      isFirstAuthor: false,
      type: "peer-reviewed",
    },
    {
      id: 18,
      title:
        "KARMA: Leveraging Multi-Agent LLMs for Automated Knowledge Graph Enrichment",
      authors: "<span class=\"font-semibold\">Lu, Yuxing</span>, J Wang",
      journal: "arXiv preprint arXiv:2502.06472",
      year: "2025",
      tags: ["Knowledge Graph", "LLM", "Multi-Agent","NLP"],
      isFirstAuthor: true,
      type: "preprint",
    },
    {
      id: 19,
      title:
        "Dissecting dynamic gene regulatory network using transformer-based temporal causality analysis",
      authors:
        "R Peng, J Qi, <span class=\"font-semibold\">Lu, Yuxing</span>, W Wu, Q Sun, C Zhang, Y Chen, J Wang",
      journal: "bioRxiv",
      year: "2025",
      tags: ["Gene Regulatory Network", "Multiomics"],
      isFirstAuthor: false,
      type: "preprint",
    },
    {
      id: 20,
      title:
        "END ^2: Robust Dual-Decoder Watermarking Framework Against Non-Differentiable Distortions",
      authors:
        "N Sun, H Fang, <span class=\"font-semibold\">Lu, Yuxing</span>, C Zhao, H Ling",
      journal: "arXiv preprint arXiv:2412.09960",
      year: "2025",
      tags: ["Watermarking", "CV", "Privacy"],
      isFirstAuthor: false,
      type: "preprint",
    },
    {
      id: 21,
      title:
        "GAEL: A Global-Aware Entity Linking Model Based on Retriever-Reader Paradigm",
      authors:
        "L Wang, S Hao, <span class=\"font-semibold\">Lu, Yuxing</span>, C Wang, Y Liu, S Li",
      journal:
        "2024 7th International Conference on Machine Learning and Natural Language …",
      year: "2024",
      tags: ["Entity Linking", "Retriever-Reader", "NLP"],
      isFirstAuthor: false,
      type: "peer-reviewed",
    },
    {
      id: 22,
      title:
        "Multiscale Scoring Model for Enhanced Urban Perception Evaluation",
      authors: "X Zhao¹, <span class=\"font-semibold\">Lu, Yuxing</span>, J Wang",
      journal:
        "ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and…",
      year: "2024",
      tags: ["Urban Planning", "Multiscale", "Evaluation", "CV"],
      isFirstAuthor: true,
      type: "peer-reviewed",
    },
    {
      id: 23,
      title:
        "Deep‐learning‐based diagnosis of myopia in children using optical coherence tomography angiography",
      authors:
        "W Xiao, <span class=\"font-semibold\">Lu, Yuxing</span>, H Miao, W Zhao, D Schanzlin",
      journal: "MedComm–Future Medicine 3 (1), e72",
      year: "2024",
      tags: [
        "CV", "OCT", "Medical AI",
      ],
      isFirstAuthor: false,
      type: "peer-reviewed",
    },
    {
      id: 24,
      title:
        "MoTIF: a Method for Trustworthy Dynamic Multimodal Learning on Omics",
      authors:
        "<span class=\"font-semibold\">Lu, Yuxing</span>, R Peng, J Wang, B Jiang",
      journal:
        "2023 IEEE International Conference on Bioinformatics and Biomedicine (BIBM …",
      year: "2023",
      tags: [
        "Multiomics",
        "Trustworthy AI",
        "Bioinformatics",
      ],
      isFirstAuthor: true,
      type: "peer-reviewed",
    },
  ];

  // Filter publications based on active filter and sort by year
  const filteredPublications = publications
    .filter((pub) => {
      // Handle search term
      if (
        searchTerm &&
        !pub.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false
      }

      // Handle preprints visibility
      if (!preprints && pub.type === "preprint") {
        return false
      }

      // Handle filters
      if (activeFilter === "all") return true
      if (activeFilter === "First Author") return pub.isFirstAuthor
      return pub.tags.includes(activeFilter)
    })
    .sort((a, b) => parseInt(b.year) - parseInt(a.year)) // Sort by year in descending order

  // Group publications by year for the timeline
  const publicationsByYear = React.useMemo(() => {
    const years: { [key: string]: number } = {}
    filteredPublications.forEach((pub) => {
      if (!years[pub.year]) {
        years[pub.year] = 0
      }
      years[pub.year]++
    })
    return years
  }, [filteredPublications])

  // Get years sorted for timeline
  const timelineYears = React.useMemo(() => {
    return Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a)) // Sort years in descending order
  }, [publicationsByYear])

  // Get max count for scaling the timeline bars
  const maxPublicationsInYear = React.useMemo(() => {
    return Math.max(...Object.values(publicationsByYear))
  }, [publicationsByYear])

  // Count publications by type
  const publicationCounts = React.useMemo(() => {
    const peerReviewed = filteredPublications.filter((p) => p.type === "peer-reviewed").length
    const preprints = filteredPublications.filter((p) => p.type === "preprint").length
    return { peerReviewed, preprints }
  }, [filteredPublications])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-56 h-56 rounded-full overflow-hidden bg-slate-700 flex-shrink-0 border-4 border-slate-600 mr-12">
              <img src="/IMG_2714.jpeg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold">Yuxing Lu</h1>
              <p className="mt-2 text-lg md:text-xl text-slate-300">PhD Student</p>
              <p className="mt-1 text-slate-300">Department of Big Data and Biomedical AI,</p>
              <p className="mt-1 text-slate-300">College of Future Technology,</p>
              <p className="mt-1 text-slate-300">Peking University, China</p>

              {/* Research Interests as text in banner */}
              <div className="mt-3 pt-3 border-t border-slate-600">
                <p className="text-slate-300">
                  <span className="font-semibold">Research Interests:</span> Biomedical AI, Metabolomic Knowledge Graph,
                  Multiomics, Medical NLP
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 text-slate-300">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-slate-400" />
                <span>+86-15261850613</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-slate-400" />
                <a href="mailto:yxlu0613@gmail.com" className="hover:underline hover:text-white transition-colors">
                  yxlu0613@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-slate-400" />
                <a href="mailto:luyx@stu.pku.edu.cn" className="hover:underline hover:text-white transition-colors">
                  luyx@stu.pku.edu.cn
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"
                  />
                </svg>
                <a
                  href="https://github.com/YuxingLu613"
                  className="hover:underline hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                </svg>
                <a href="https://scholar.google.com/citations?hl=en&user=_LoR2f8AAAAJ" className="hover:underline hover:text-white transition-colors">
                  Google Scholar
                </a>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-slate-400" />
                <a href="https://www.linkedin.com/in/yuxinglu0613/" className="hover:underline hover:text-white transition-colors">
                  Linkedin
                </a>
              </div>
              <a
                href="#"
                className="mt-2 inline-flex items-center px-4 py-2 bg-slate-700 text-white border border-slate-600 rounded-md hover:bg-slate-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* News Section */}
      <section className="mb-12 mt-8">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold border-b-2 border-slate-700 pb-2 mb-6 text-slate-800">Recent Updates</h2>
          <div className="bg-slate-50 rounded-lg p-5 shadow-sm border border-slate-200">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-slate-700 text-white text-xs font-medium px-2.5 py-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  2025-03
                </span>
                <p className="text-slate-700 leading-relaxed">
                  Our research paper "Cross-modal alignment with synthetic caption for text-based person search" has been accepted by the International Journal of Multimedia Information Retrieval!
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-slate-700 text-white text-xs font-medium px-2.5 py-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  2025-03
                </span>
                <p className="text-slate-700 leading-relaxed">
                  I had the opportunity to present our research paper "END ^2: Robust Dual-Decoder Watermarking Framework Against Non-Differentiable Distortions" at AAAI 2025!
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-slate-700 text-white text-xs font-medium px-2.5 py-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  2024-12
                </span>
                <p className="text-slate-700 leading-relaxed">
                  I was honored to receive the National Scholarship!
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-slate-700 text-white text-xs font-medium px-2.5 py-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  2024-06
                </span>
                <p className="text-slate-700 leading-relaxed">
                  I was selected for the Tencent Rhino-bird Elite Program and began my internship at Tencent AI for Life Science Lab, which lasted for a year!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-8">
        {/* Education */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-slate-700 pb-2 mb-6 text-slate-800">Education</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row justify-between">
                <h3 className="text-xl font-semibold text-slate-800">Peking University</h3>
                <span className="text-slate-600 font-medium">2022-2027 (est.)</span>
              </div>
              <p className="font-medium text-slate-700 mt-2">PhD. Biomedical Engineering (Joint Program with Georgia Tech and Emory University)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row justify-between">
                <h3 className="text-xl font-semibold text-slate-800">Soochow University</h3>
                <span className="text-slate-600 font-medium">2018-2022</span>
              </div>
              <p className="font-medium text-slate-700 mt-2">
                B.S. Computer Science and Technology (Artificial Intelligence)
              </p>
            </div>
          </div>
        </section>

        {/* Internship */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-slate-700 pb-2 mb-4 text-slate-800">Internship</h2>
          <div className="space-y-6">
            <div>
              <div className="flex flex-col md:flex-row justify-between">
                <h3 className="text-xl font-semibold text-slate-800">Tencent Technology</h3>
                <span className="text-slate-600">2024.06-2025.06 (est.)</span>
              </div>
              <p className="font-medium text-slate-700">Intern, Shenzhen</p>
            </div>
            <div>
              <div className="flex flex-col md:flex-row justify-between">
                <h3 className="text-xl font-semibold text-slate-800">Huawei Technologies Co., Ltd</h3>
                <span className="text-slate-600">2021.07-2021.12</span>
              </div>
              <p className="font-medium text-slate-700">AI Engineer (Intern), Nanjing</p>
              {/* <p className="text-slate-700">
                Process data from tens of millions of end-users to establish an advertising distribution recommendation
                model.
              </p> */}
            </div>
            <div>
              <div className="flex flex-col md:flex-row justify-between">
                <h3 className="text-xl font-semibold text-slate-800">
                  National University of Singapore Research Institute
                </h3>
                <span className="text-slate-600">2021.02-2021.06</span>
              </div>
              <p className="font-medium text-slate-700">Research Intern, Suzhou</p>
              {/* <p className="text-slate-700">
                Develop a pregnancy-related QA system using knowledge graph from 27,000+ inquiries and expert responses.
              </p> */}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-slate-700 pb-2 mb-6 text-slate-800">Publications</h2>

          {/* Publication Stats with Bar Chart */}
          {timelineYears.length > 0 && (
            <section className="mb-8">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  <div className="text-center md:text-left">
                    <p className="text-4xl font-bold text-slate-800">{publicationCounts.peerReviewed}</p>
                    <p className="text-slate-600">Peer-Reviewed Papers</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-4xl font-bold text-slate-800">{publicationCounts.preprints}</p>
                    <p className="text-slate-600">Pre-Prints</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-4">Publication Timeline</h3>
                <div className="flex flex-col space-y-3">
                  {timelineYears.map((year) => {
                    const count = publicationsByYear[year]
                    const percentage = maxPublicationsInYear > 0 ? (count / maxPublicationsInYear) * 100 : 0

                    return (
                      <div key={year} className="flex items-center">
                        <span className="w-12 text-right mr-4">{year}</span>
                        <div className="flex-grow h-7 bg-slate-100 rounded">
                          <div className="h-7 bg-slate-700 rounded" style={{ width: `${percentage}%` }}></div>
                        </div>
                        <span className="w-8 text-right ml-3">{count}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Publication Filters */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === "all"
                    ? "bg-slate-800 text-white"
                    : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50"
                }`}
              >
                All Publications
              </button>
              <button
                onClick={() => setActiveFilter("Medical AI")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === "Medical AI"
                    ? "bg-slate-800 text-white"
                    : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50"
                }`}
              >
                Medical AI
              </button>
              <button
                onClick={() => setActiveFilter("Multiomics")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === "Multiomics"
                    ? "bg-slate-800 text-white"
                    : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50"
                }`}
              >
                Multiomics
              </button>
              <button
                onClick={() => setActiveFilter("NLP")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === "NLP"
                    ? "bg-slate-800 text-white"
                    : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50"
                }`}
              >
                NLP
              </button>
              <button
                onClick={() => setActiveFilter("Knowledge Graph")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === "Knowledge Graph"
                    ? "bg-slate-800 text-white"
                    : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50"
                }`}
              >
                Knowledge Graph
              </button>
              <button
                onClick={() => setActiveFilter("CV")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === "CV"
                    ? "bg-slate-800 text-white"
                    : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50"
                }`}
              >
                CV
              </button>
              <button
                onClick={() => setActiveFilter("Urban Planning")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === "Urban Planning"
                    ? "bg-slate-800 text-white"
                    : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50"
                }`}
              >
                Urban Planning
              </button>
              <button
                onClick={() => setActiveFilter("First Author")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === "First Author"
                    ? "bg-slate-800 text-white"
                    : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50"
                }`}
              >
                First Author
              </button>
              <button
                onClick={() => setPreprints(!preprints)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  !preprints
                    ? "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50"
                    : "bg-slate-800 text-white"
                }`}
              >
                {preprints ? "Hide Preprints" : "Show Preprints"}
              </button>
            </div>
          </section>

          <div className="mb-10">
            <div className="space-y-6">
              {filteredPublications.length > 0 ? (
                <>
                  {filteredPublications.map((pub) => (
                    <div
                      key={pub.id}
                      className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium text-slate-800 text-lg">{pub.title}</h4>
                        <span className="text-slate-600 text-sm whitespace-nowrap ml-2 font-medium">{pub.year}</span>
                      </div>
                      <p className="mt-2 text-slate-700" dangerouslySetInnerHTML={{ __html: pub.authors }}></p>
                      <p className="mt-1 text-slate-600 italic">{pub.journal}</p>
                      {/* {pub.sponsorship && <p className="mt-1 text-green-600 text-sm">{pub.sponsorship}</p>} */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {pub.type === "preprint" && (
                          <span className="bg-slate-200 text-slate-800 text-xs font-medium px-2.5 py-1 rounded">
                            Preprint
                          </span>
                        )}
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded cursor-pointer hover:bg-slate-200"
                            onClick={() => setActiveFilter(tag)}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-slate-600">No publications match your current filters.</p>
                  <button
                    onClick={() => {
                      setActiveFilter("all")
                      setSearchTerm("")
                      setPreprints(true)
                    }}
                    className="mt-4 bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Patents and Copyrights - Simplified */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-slate-700 pb-2 mb-6 text-slate-800">
            Patents and Copyrights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">
                [P] Method, Apparatus, Equipment and Storage Medium for Processing Biological Samples
              </p>
              <p className="text-slate-600 mt-1">No. 202411677321 | 2024.11</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">
                [P] Training Method, Apparatus, Electronic Device, Medium and Program Product for Prediction Model
              </p>
              <p className="text-slate-600 mt-1">No. 202411162345 | 2024.07</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">
                [P] Dual-modal scoring system coupling park social media texts and images
              </p>
              <p className="text-slate-600 mt-1">No. 2024100167605 | 2024.01</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">
                [P] Method for built environments perception based on street view images
              </p>
              <p className="text-slate-600 mt-1">No. 2023117075790 | 2023.12</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">
                [C] Simulation autonomous driving system based on European Truck 2
              </p>
              <p className="text-slate-600 mt-1">No. 2021R11L1628129 | 2021.04</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">
                [C] Enterprise entity recognition system based on deep learning
              </p>
              <p className="text-slate-600 mt-1">No. 2021R45L2584735 | 2020.11</p>
            </div>
          </div>
        </section>

        {/* Honors and Awards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-slate-700 pb-2 mb-6 text-slate-800">
            Selected Honors and Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">National Scholarship</p>
              <p className="text-slate-600 mt-1">Peking University</p>
              <p className="text-slate-500 text-sm mt-1">2024.12</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">Principle's Scholarship</p>
              <p className="text-slate-600 mt-1">Peking University</p>
              <p className="text-slate-500 text-sm mt-1">2024.06</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">Top Ten Outstanding Youth Volunteer Exemplars</p>
              <p className="text-slate-600 mt-1">Peking University</p>
              <p className="text-slate-500 text-sm mt-1">2023.12</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">Merit Student</p>
              <p className="text-slate-600 mt-1">Peking University</p>
              <p className="text-slate-500 text-sm mt-1">2023.10</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">Top 100 Youth Volunteer</p>
              <p className="text-slate-600 mt-1">Peking University</p>
              <p className="text-slate-500 text-sm mt-1">2022.12</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">Second Prize (National)</p>
              <p className="text-slate-600 mt-1">"China Software Cup" Software Design Competition</p>
              <p className="text-slate-500 text-sm mt-1">2021.11</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">Bronze Medal (National)</p>
              <p className="text-slate-600 mt-1">"Internet +" National Entrepreneurship Competition</p>
              <p className="text-slate-500 text-sm mt-1">2021.10</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <p className="font-medium text-slate-800">Second Prize (National)</p>
              <p className="text-slate-600 mt-1">"Lanqiao" Software National Competition</p>
              <p className="text-slate-500 text-sm mt-1">2021.05</p>
            </div>
          </div>
        </section>

        {/* Extracurricular Activities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-slate-700 pb-2 mb-6 text-slate-800">
            Extracurricular Activities
          </h2>
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between">
                <p className="font-medium text-slate-800">Administrative Assistant</p>
                <span className="text-slate-500 font-medium">2023.09-Now</span>
              </div>
              <p className="text-slate-600 mt-1">College of Future Technology, Peking University</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between">
                <p className="font-medium text-slate-800">Administrative Assistant</p>
                <span className="text-slate-500 font-medium">2022.09-Now</span>
              </div>
              <p className="text-slate-600 mt-1">International Student Office, Peking University</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between">
                <p className="font-medium text-slate-800">President</p>
                <span className="text-slate-500 font-medium">2020.06-2021.09</span>
              </div>
              <p className="text-slate-600 mt-1">Student Union, SCST, Soochow University</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between">
                <p className="font-medium text-slate-800">President</p>
                <span className="text-slate-500 font-medium">2020.06-2021.09</span>
              </div>
              <p className="text-slate-600 mt-1">Youth Volunteer Association, SCST, Soochow University</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between">
                <p className="font-medium text-slate-800">Executive Director</p>
                <span className="text-slate-500 font-medium">2019.06-Now</span>
              </div>
              <p className="text-slate-600 mt-1">Suzhou "Star Autism Child" Program</p>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition-colors"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-slate-100 py-8 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 text-center text-slate-600">
          <p>© {new Date().getFullYear()} Yuxing Lu. All rights reserved.</p>
          <p className="mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </footer>
    </div>
  )
}

