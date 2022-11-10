 
//import * as courses from './Link.json' assert { type: 'json' };
// set the variable courses to the content of the json file
import { createRequire } from "module"
const require = createRequire(import.meta.url);
let courses = [{
	"title": "AI Framework Overview: AI Developer Role",
	"link": "https://accenture.percipio.com/courses/cfaeeedf-ca90-4eec-a71d-3fbd952b9fe4"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "The AI Practitioner: Optimizing AI Solutions",
	"link": "https://accenture.percipio.com/courses/1d88b610-203d-4ead-8d83-65b941d02bbd"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "AI in Industry",
	"link": "https://accenture.percipio.com/courses/3fcad1d7-69c1-4737-978a-16c4c728f874"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "AI Enterprise Planning",
	"link": "https://accenture.percipio.com/courses/fca87600-3d01-466b-8106-ffdbdb9536f4"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "The AI Practitioner: Tuning AI Solutions",
	"link": "https://accenture.percipio.com/courses/cd4e20a4-9f52-4514-99bc-f358809ba125"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Artificial Intelligence: Basic AI Theory",
	"link": "https://accenture.percipio.com/courses/a1282286-a42e-4aa5-9edf-65fc043070f6"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "The AI Practitioner: Role &amp; Responsibilities",
	"link": "https://accenture.percipio.com/courses/769a73b1-2309-4832-9ad1-4009e7f5c51d"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Applying AI to Robotics",
	"link": "https://accenture.percipio.com/courses/b452e82a-d8df-439a-97e7-af9a3f5d85c7"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Final Exam: AI Architect",
	"link": "https://accenture.percipio.com/courses/766385bb-1a24-4a6f-90f1-15fb7e0d9e6b"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Final Exam: AI Practitioner",
	"link": "https://accenture.percipio.com/courses/c32d6ba6-2b6c-4590-9637-547f69d77a92"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Python AI Development: Introduction",
	"link": "https://accenture.percipio.com/courses/279d770c-d9fc-4a1e-852a-1a7104b38922"
}, {
	"title": "From Channel: Python",
	"link": "https://accenture.percipio.com/channels/d01e6a10-1313-11e7-822f-df9d5d5ce619"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Final Exam: AI Apprentice",
	"link": "https://accenture.percipio.com/courses/9ada7f4b-b222-48d6-8a54-bbb7fe44ca11"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Final Exam: AI Developer",
	"link": "https://accenture.percipio.com/courses/71cb1954-f96a-405f-a343-480c1279971a"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Explainable AI",
	"link": "https://accenture.percipio.com/courses/59339049-9da0-442d-a6ab-4e0f45447271"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Azure AI Fundamentals: Creating a Conversational AI Bot",
	"link": "https://accenture.percipio.com/courses/e73ec4ae-824a-4ec9-a133-24cdbbd48824"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Certified: Azure AI Fundamentals",
	"link": "https://accenture.percipio.com/channels/1301ab41-2538-4c48-8c19-34a32836358e"
}, {
	"title": "AI Framework Overview: Development Frameworks",
	"link": "https://accenture.percipio.com/courses/8ff706c0-c0cb-44b8-82ea-1d26a819ae73"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Azure AI Fundamentals: Artificial Intelligence &amp; Machine Learning",
	"link": "https://accenture.percipio.com/courses/78c45978-d9aa-4408-a034-fb6945bc7ff1"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Certified: Azure AI Fundamentals",
	"link": "https://accenture.percipio.com/channels/1301ab41-2538-4c48-8c19-34a32836358e"
}, {
	"title": "Leveraging Reusable AI Architecture Patterns",
	"link": "https://accenture.percipio.com/courses/4a8b08a6-b2e3-4068-aa66-46177b9e5043"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Fundamentals of AI &amp; ML: Introduction to Artificial Intelligence",
	"link": "https://accenture.percipio.com/courses/25a4415c-6493-4324-ba6b-7622eb140ea4"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Planning AI Implementation",
	"link": "https://accenture.percipio.com/courses/7c87d950-2a0d-11e9-b667-9bf4737b3ba8"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "Evaluating Current and Future AI Technologies and Frameworks",
	"link": "https://accenture.percipio.com/courses/e9698d0b-1b1f-4bae-9d46-59e7bfeed269"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "NLP Case Studies: Developing an AI Chatbot",
	"link": "https://accenture.percipio.com/courses/45d81443-488d-475d-bb0e-90e399aaaf9e"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "Python AI Development: Practice",
	"link": "https://accenture.percipio.com/courses/3015a618-4bbe-4403-ac63-750266e4545a"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Introducing Apache Spark for AI Development",
	"link": "https://accenture.percipio.com/courses/3d06be65-e6df-4404-b244-4e36ab7ce6b5"
}, {
	"title": "From Channel: Apache Spark",
	"link": "https://accenture.percipio.com/channels/d0c511f0-0b1e-11e7-a3e9-a39d8b265364"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Implementing AI Using Cognitive Modeling",
	"link": "https://accenture.percipio.com/courses/4dc2578d-97da-40b3-bedc-d48f410de740"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Implementing AI With Amazon ML",
	"link": "https://accenture.percipio.com/courses/2667d9fd-40d6-4056-bde8-25482e7dcad2"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Azure AI Fundamentals: Anomaly Detection",
	"link": "https://accenture.percipio.com/courses/5291ba47-7baf-43f6-9287-4404d5933eae"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Certified: Azure AI Fundamentals",
	"link": "https://accenture.percipio.com/channels/1301ab41-2538-4c48-8c19-34a32836358e"
}, {
	"title": "Using Intelligent Information Systems in AI",
	"link": "https://accenture.percipio.com/courses/59a02422-d68a-49d4-ad60-16b335525a19"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Artificial Intelligence: Types of Artificial Intelligence",
	"link": "https://accenture.percipio.com/courses/657466c1-b793-4756-ba0f-67537a035628"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Azure AI Fundamentals: Computer Vision",
	"link": "https://accenture.percipio.com/courses/25747e38-e98a-488a-82f9-a581913fff3e"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Certified: Azure AI Fundamentals",
	"link": "https://accenture.percipio.com/channels/1301ab41-2538-4c48-8c19-34a32836358e"
}, {
	"title": "Elements of an Artificial Intelligence Architect",
	"link": "https://accenture.percipio.com/courses/a3a4c209-daa4-4fd5-8ae9-f105712ee754"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Azure AI Fundamentals: Face &amp; Optical Character Recognition",
	"link": "https://accenture.percipio.com/courses/c55682d4-33c6-461a-a945-4873201e6dc7"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Certified: Azure AI Fundamentals",
	"link": "https://accenture.percipio.com/channels/1301ab41-2538-4c48-8c19-34a32836358e"
}, {
	"title": "Artificial Intelligence: Human-computer Interaction Overview",
	"link": "https://accenture.percipio.com/courses/c9b4524a-0914-4aed-b8cb-7e736d5398ac"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Predictive Analytics: Case Studies for AI in Agriculture",
	"link": "https://accenture.percipio.com/courses/2caca8ac-680d-42e7-bca4-5df0d9503d14"
}, {
	"title": "From Channel: Predictive Analytics",
	"link": "https://accenture.percipio.com/channels/84e64131-1557-11e7-9f21-659139b59eba"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "AI Fundamentals",
	"link": "https://accenture.percipio.com/courses/fdbd2630-8f1f-11e8-909a-5518645c4426"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Using Apache Spark for AI Development",
	"link": "https://accenture.percipio.com/courses/e5069354-056d-4e5e-b499-d5b0efb976d4"
}, {
	"title": "From Channel: Apache Spark",
	"link": "https://accenture.percipio.com/channels/d0c511f0-0b1e-11e7-a3e9-a39d8b265364"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Computer Vision: AI &amp; Computer Vision",
	"link": "https://accenture.percipio.com/courses/5fb88896-0291-4f8b-a681-3b094c3571f1"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "AI Practitioner: Practical BERT Examples",
	"link": "https://accenture.percipio.com/courses/1beb67d6-2f99-47d2-aeff-b1ebe9a62491"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "What is AI?",
	"link": "https://accenture.percipio.com"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Azure AI Fundamentals: Natural Language Processing",
	"link": "https://accenture.percipio.com/courses/910d915f-6871-4787-a623-2a9c826e6b7e"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Certified: Azure AI Fundamentals",
	"link": "https://accenture.percipio.com/channels/1301ab41-2538-4c48-8c19-34a32836358e"
}, {
	"title": "Azure AI Fundamentals: Evaluating Models with the ML Designer",
	"link": "https://accenture.percipio.com/courses/ecc8b628-6ce3-4930-98e5-82587e23277f"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Certified: Azure AI Fundamentals",
	"link": "https://accenture.percipio.com/channels/1301ab41-2538-4c48-8c19-34a32836358e"
}, {
	"title": "Identify guiding principles for responsible AI",
	"link": "https://accenture.percipio.com/linked-contents/d2f645b6-f154-4809-8290-6d6f0dbf351f/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "AI Practitioner: BERT Best Practices &amp; Design Considerations",
	"link": "https://accenture.percipio.com/courses/54b319e3-910e-4993-964a-ad66b8f979c0"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Azure AI Fundamentals: Machine Learning with Azure Services",
	"link": "https://accenture.percipio.com/courses/b3aa0a4c-85b4-4f6f-a5ce-b5f431d990c0"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Certified: Azure AI Fundamentals",
	"link": "https://accenture.percipio.com/channels/1301ab41-2538-4c48-8c19-34a32836358e"
}, {
	"title": "Azure AI Fundamentals: Using Azure Machine Learning Studio",
	"link": "https://accenture.percipio.com/courses/e9040401-a5fe-4132-984c-76ef8b0fd312"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Certified: Azure AI Fundamentals",
	"link": "https://accenture.percipio.com/channels/1301ab41-2538-4c48-8c19-34a32836358e"
}, {
	"title": "Artificial Intelligence: Human-computer Interaction Methodologies",
	"link": "https://accenture.percipio.com/courses/ba77c858-86e9-49e3-9ef3-d92a89a45765"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Introduction to AI technology",
	"link": "https://accenture.percipio.com/linked-contents/6110f53a-9caa-4e70-b623-400c044f6e59/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Azure AI Fundamentals: Authoring with the Azure ML Studio Designer",
	"link": "https://accenture.percipio.com/courses/0c6ded97-b561-4503-a10b-5684ce590523"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Certified: Azure AI Fundamentals",
	"link": "https://accenture.percipio.com/channels/1301ab41-2538-4c48-8c19-34a32836358e"
}, {
	"title": "Implement AI in your organization",
	"link": "https://accenture.percipio.com/linked-contents/6320d00b-e948-432e-b1dd-5453cb2f813f/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Manage models in AI Builder",
	"link": "https://accenture.percipio.com/linked-contents/619f4b65-c5ad-4f45-8463-fc70679cc8d0/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Microsoft Azure Artificial Intelligence (AI) strategy and solutions",
	"link": "https://accenture.percipio.com/linked-contents/f40588ef-0954-4062-bf2d-4b8b6a41d497/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Get started with AI Builder licensing",
	"link": "https://accenture.percipio.com/linked-contents/c1456ced-fab7-4c7d-b3cd-c21363ef245b/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Cognitive Models: Overview of Cognitive Models",
	"link": "https://accenture.percipio.com/courses/bb53d41c-652c-42bf-9a27-b740013f9f18"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "AWS Certified Machine Learning: AI/ML Services",
	"link": "https://accenture.percipio.com/courses/aad31b40-1782-419b-b24e-cef1c3f82965"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Channel: AWS Certified Machine Learning - Specialty",
	"link": "https://accenture.percipio.com/channels/d2c5edf5-6ffb-4f5f-9687-bbe71377de62"
}, {
	"title": "Get started with AI Builder",
	"link": "https://accenture.percipio.com/linked-contents/3494724a-17d7-4bb3-b571-93060874481b/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Get started with AI on Azure",
	"link": "https://accenture.percipio.com/linked-contents/ecf1f3d2-f3fe-498c-bacb-dd2bac783703/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Identify governing practices for responsible AI",
	"link": "https://accenture.percipio.com/linked-contents/c6538e36-e81b-4422-960d-1bd249d09aae/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Use AI Builder in Power Automate",
	"link": "https://accenture.percipio.com/linked-contents/dd0653d1-fa93-47bc-882c-41b715853f15/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Track wild polar bears with AI",
	"link": "https://accenture.percipio.com/linked-contents/ec6ad00e-d5e5-465e-a134-b507a6943b1a/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Introduction to Artificial Intelligence",
	"link": "https://accenture.percipio.com/courses/560aec15-b388-11e7-9c7a-4e99e0664338"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Cognitive Models: Approaches to Cognitive Learning",
	"link": "https://accenture.percipio.com/courses/8fb913ef-4585-4f2b-80a2-9449af6cb41a"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Discuss practices for responsible AI at Microsoft",
	"link": "https://accenture.percipio.com/linked-contents/1ebffc7e-3578-4b12-8bdd-4eb5620bd1ee/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Get started with AI Builder Language detection",
	"link": "https://accenture.percipio.com/linked-contents/0543840c-ee74-4f75-9015-7a10bd62c0fe/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Get started with AI Builder Sentiment analysis",
	"link": "https://accenture.percipio.com/linked-contents/e860821a-7c01-4af7-8502-62ab9a5796be/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Work with AI visuals in Power BI",
	"link": "https://accenture.percipio.com/linked-contents/908c060a-d73c-4384-9a47-9842649e72ed/landing"
}, {
	"title": "From Channel: Power BI",
	"link": "https://accenture.percipio.com/channels/b086cc41-2a94-11e7-9149-6dad704035be"
}, {
	"title": "Get started with AI Builder Text recognition",
	"link": "https://accenture.percipio.com/linked-contents/782b1246-1ba8-406c-93ca-a38cf35078d4/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Get started with AI Builder Object detection",
	"link": "https://accenture.percipio.com/linked-contents/4979457b-76aa-41ea-a66e-319ad4d350b3/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Use AI in Dynamics 365 Field Service",
	"link": "https://accenture.percipio.com/linked-contents/e6d5ef47-a2cf-46c5-a119-c1c021158989/landing"
}, {
	"title": "From Channel: Microsoft Dynamics Administration",
	"link": "https://accenture.percipio.com/channels/64b58d31-161a-11e7-bf96-7fcd66e560cd"
}, {
	"title": "Introduction to AI Builder Key phrase extraction",
	"link": "https://accenture.percipio.com/linked-contents/bfba5a33-cf1d-4c8c-a1e7-55ce689f129b/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Get started with Form processing in AI Builder",
	"link": "https://accenture.percipio.com/linked-contents/ad664895-4cec-4b5b-b143-3ff856265733/landing"
}, {
	"title": "From Channel: Microsoft Dynamics Administration",
	"link": "https://accenture.percipio.com/channels/64b58d31-161a-11e7-bf96-7fcd66e560cd"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Choose the best AI service for your needs",
	"link": "https://accenture.percipio.com/linked-contents/d269dc9a-2445-4a86-8c26-7e12155d7073/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Get started with invoice processing in AI Builder",
	"link": "https://accenture.percipio.com/linked-contents/4e812e34-fe06-4609-962e-4eebd828c050/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Get started with AI Builder Business card reader",
	"link": "https://accenture.percipio.com/linked-contents/55d5a427-deaa-4a78-b9e0-69c422808843/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Identify governing practices for responsible AI in government",
	"link": "https://accenture.percipio.com/linked-contents/4276d325-2e3d-47f2-a5d4-b0417cf3c6a4/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Define an AI strategy to create business value",
	"link": "https://accenture.percipio.com/linked-contents/d238ee9d-778f-42bd-b4f3-4d0da27720fc/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Get started with receipt processing in AI Builder",
	"link": "https://accenture.percipio.com/linked-contents/c9455c06-ef90-4d79-b944-e700bfd00003/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Enable business users with key AI use cases",
	"link": "https://accenture.percipio.com/linked-contents/66f93be0-0c04-4049-a16b-1ae76b116dd5/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Discover Microsoft guidelines for responsible conversational AI development",
	"link": "https://accenture.percipio.com/linked-contents/78b0bb94-0b92-4395-8532-1bf2f6ca373b/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Define an AI strategy to create value in government",
	"link": "https://accenture.percipio.com/linked-contents/6d3ec782-3dc1-410a-a49d-d0499fa5f3aa/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Predictive Analytics: Case Studies on Predictive Analytics for Healthcare",
	"link": "https://accenture.percipio.com/courses/5edfb6c6-7ace-4ac9-8fc1-db5ed6288140"
}, {
	"title": "From Channel: Predictive Analytics",
	"link": "https://accenture.percipio.com/channels/84e64131-1557-11e7-9f21-659139b59eba"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Azure Fundamentals: IoT &amp; AI",
	"link": "https://accenture.percipio.com/courses/a85ac6f4-f09f-4990-bc4e-dcd69ba4d1cd"
}, {
	"title": "From Channel: Azure Infrastructure",
	"link": "https://accenture.percipio.com/channels/c2dd5d10-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Working With Microsoft Cognitive Toolkit (CNTK)",
	"link": "https://accenture.percipio.com/courses/0060c429-42c6-462f-90b6-1f698b9b517a"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Apply AI Builder Text Recognition in the transportation industry",
	"link": "https://accenture.percipio.com/linked-contents/7c2dfebb-0aca-4d4c-8763-5fedbe98b9cf/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Define an AI strategy to create value in education",
	"link": "https://accenture.percipio.com/linked-contents/14e2959f-6a40-4c5f-badb-1d2b1dea4666/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Discover Microsoft safety guidelines for responsible conversational AI development",
	"link": "https://accenture.percipio.com/linked-contents/41fdf95a-abeb-4d8f-981f-632c5907e89a/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Define an AI strategy to create business value in retail",
	"link": "https://accenture.percipio.com/linked-contents/0e1cbfe9-3048-43f1-a0e5-0f9eabae06ca/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Build an AI web app by using Python and Flask",
	"link": "https://accenture.percipio.com/linked-contents/618ed8bb-0cd9-44ee-a9be-eb2edbe4a574/landing"
}, {
	"title": "From Channel: Python",
	"link": "https://accenture.percipio.com/channels/d01e6a10-1313-11e7-822f-df9d5d5ce619"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Define an AI strategy to create business value in healthcare",
	"link": "https://accenture.percipio.com/linked-contents/5e239f4c-88f9-478b-a3af-84455ba244cf/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Computer Vision: Introduction",
	"link": "https://accenture.percipio.com/courses/d2755e64-4c8c-4d80-9a6d-590c7aa456f6"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Define an AI strategy to create business value in manufacturing",
	"link": "https://accenture.percipio.com/linked-contents/27c0a61a-6c54-4eb6-afd8-68e455e9e199/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Use AI Builder to process invoice forms in Power Automate",
	"link": "https://accenture.percipio.com/linked-contents/0d1e5fb4-9f2d-459c-a68e-6fbffe618e98/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Define an AI strategy to create business value in financial services",
	"link": "https://accenture.percipio.com/linked-contents/9fdfa9dc-1b5d-4e0e-b76e-3fc8d1d874b6/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Working With the Keras Framework",
	"link": "https://accenture.percipio.com/courses/9b174ed7-b02b-417a-bc4a-435b1d14809c"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "CEH v11: Incident Management, ML, AI &amp; Regulations",
	"link": "https://accenture.percipio.com/courses/4052bab2-e5dd-43f7-ab5b-eab3f2d02af0"
}, {
	"title": "From Channel: Certified Ethical Hacker",
	"link": "https://accenture.percipio.com/channels/f859e1b5-845c-4112-95e8-4fa3baf27919"
}, {
	"title": "Predictive Analytics: Case Studies for Marketing &amp; Retail",
	"link": "https://accenture.percipio.com/courses/06da7a04-0b27-4b63-afc9-7bf189cb2ebe"
}, {
	"title": "From Channel: Predictive Analytics",
	"link": "https://accenture.percipio.com/channels/84e64131-1557-11e7-9f21-659139b59eba"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Advanced NLP: Introduction to BERT",
	"link": "https://accenture.percipio.com/courses/16010d3a-6223-41a5-9edb-050aab6690e1"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "Set up cash flow forecasts using Azure AI in Dynamics 365 Business Central",
	"link": "https://accenture.percipio.com/linked-contents/6061ad4b-dd0d-4fe4-bf8c-9f28047e0de8/landing"
}, {
	"title": "From Channel: Microsoft Dynamics Administration",
	"link": "https://accenture.percipio.com/channels/64b58d31-161a-11e7-bf96-7fcd66e560cd"
}, {
	"title": "Advanced Functionality of Microsoft Cognitive Toolkit (CNTK)",
	"link": "https://accenture.percipio.com/courses/45643436-fa09-48af-ab87-7a9f8178fc80"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Advanced NLP: Introduction to Transformer Models",
	"link": "https://accenture.percipio.com/courses/c2d66fc8-82e8-471c-aa13-cf90fb73fde4"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "Predictive Analytics: Detecting Kidney Disease Using AI",
	"link": "https://accenture.percipio.com/courses/9bd172c6-558f-4522-84f3-6dda86cdc775"
}, {
	"title": "From Channel: Predictive Analytics",
	"link": "https://accenture.percipio.com/channels/84e64131-1557-11e7-9f21-659139b59eba"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Advanced NLP: Language Translation Using Transformer Model",
	"link": "https://accenture.percipio.com/courses/07826cc1-9f7a-42d7-a366-c117038eaa77"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "Extending Amazon Machine Learning",
	"link": "https://accenture.percipio.com/courses/3f1fc89b-d328-4372-a0b0-1b194bf197a8"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Discover how to foster an AI-ready culture in marketing",
	"link": "https://accenture.percipio.com/linked-contents/a066a7fe-3edc-49ff-bcb7-9f0beb18c257/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Text Mining and Analytics: Machine Learning for Natural Language Processing",
	"link": "https://accenture.percipio.com/courses/82df0f22-d11d-47c4-b079-4fc52d2cbf35"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "Text Mining and Analytics: Pattern Matching &amp; Information Extraction",
	"link": "https://accenture.percipio.com/courses/9ff2e7db-b4c8-4e0d-8ecf-9c57264f690d"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "Advanced NLP: Introduction to GPT",
	"link": "https://accenture.percipio.com/courses/a7a6dacb-a441-40e5-8b56-5e404b10598e"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "Natural Language Processing: Getting Started with NLP",
	"link": "https://accenture.percipio.com/courses/24509bdd-2063-47e4-a387-f69c4e22a737"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "Text Mining and Analytics: Hotel Reviews Sentiment Analysis",
	"link": "https://accenture.percipio.com/courses/e31f5c82-6078-4e03-af99-1d7ac651fd98"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "Creating, joining, and managing meetings in Microsoft Teams 2021",
	"link": "https://accenture.percipio.com/courses/7f683a05-71b0-401b-a0f3-dac1bea50657"
}, {
	"title": "From Channel: Microsoft Teams",
	"link": "https://accenture.percipio.com/channels/86334311-30c0-11e7-986b-4f2e8dd821d3"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Rookie to Rockstar: Mastering Professional Effectiveness",
	"link": "https://accenture.percipio.com/journey/19777be0-da23-473a-986a-f8eea57d485c"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "Creating, finding &amp; organizing files in Microsoft Teams 2021",
	"link": "https://accenture.percipio.com/courses/cf661cb1-6319-44e0-830a-93bd6a3b4f34"
}, {
	"title": "From Channel: Microsoft Teams",
	"link": "https://accenture.percipio.com/channels/86334311-30c0-11e7-986b-4f2e8dd821d3"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "Using private messaging &amp; call tools in Microsoft Teams 2021",
	"link": "https://accenture.percipio.com/courses/166bf26c-9fdb-4664-9cbc-69517fa69a68"
}, {
	"title": "From Channel: Microsoft Teams",
	"link": "https://accenture.percipio.com/channels/86334311-30c0-11e7-986b-4f2e8dd821d3"
}, {
	"title": "From Channel: DigComp",
	"link": "https://accenture.percipio.com/channels/0a23fb0a-3c8d-45f5-b08b-078e27d00cdc"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Rookie to Rockstar: Mastering Professional Effectiveness",
	"link": "https://accenture.percipio.com/journey/19777be0-da23-473a-986a-f8eea57d485c"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "Creating and managing teams &amp; channels in Microsoft Teams 2021",
	"link": "https://accenture.percipio.com/courses/50eb583c-a737-4b22-804a-24ca4dc869de"
}, {
	"title": "From Channel: Microsoft Teams",
	"link": "https://accenture.percipio.com/channels/86334311-30c0-11e7-986b-4f2e8dd821d3"
}, {
	"title": "From Channel: DigComp",
	"link": "https://accenture.percipio.com/channels/0a23fb0a-3c8d-45f5-b08b-078e27d00cdc"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "Formatting, illustrating &amp; reacting to messages in Microsoft Teams 2021",
	"link": "https://accenture.percipio.com/courses/1fffdd56-727e-4579-b845-91b0163ea42f"
}, {
	"title": "From Channel: Microsoft Teams",
	"link": "https://accenture.percipio.com/channels/86334311-30c0-11e7-986b-4f2e8dd821d3"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "Working with Tabs &amp; Apps in Microsoft Teams 2021",
	"link": "https://accenture.percipio.com/courses/bf6b8215-3f0c-459a-8f25-f94fdee06085"
}, {
	"title": "From Channel: Microsoft Teams",
	"link": "https://accenture.percipio.com/channels/86334311-30c0-11e7-986b-4f2e8dd821d3"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "Deep Learning for NLP: Memory-based Networks",
	"link": "https://accenture.percipio.com/courses/de076250-a0e6-43ab-9c4c-f8b0e8368d8d"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "OpenCV: Introduction",
	"link": "https://accenture.percipio.com/courses/bb9a43d2-5e39-4a1d-83dd-d3a2b363bac5"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "Exploring and setting up Microsoft Teams 2021",
	"link": "https://accenture.percipio.com/courses/fa88c798-9653-4cae-9046-a2b377e896f8"
}, {
	"title": "From Channel: Microsoft Teams",
	"link": "https://accenture.percipio.com/channels/86334311-30c0-11e7-986b-4f2e8dd821d3"
}, {
	"title": "From Channel: DigComp",
	"link": "https://accenture.percipio.com/channels/0a23fb0a-3c8d-45f5-b08b-078e27d00cdc"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "Transforming the Workplace Using Artificial Intelligence",
	"link": "https://accenture.percipio.com/courses/25f80031-9ce9-4c62-84d6-f093bd44937b"
}, {
	"title": "From Channel: Disruptive Technologies",
	"link": "https://accenture.percipio.com/channels/23ef4630-dc1f-11e7-9fe8-1b7f5fcc733d"
}, {
	"title": "Get started with AI Builder document automation",
	"link": "https://accenture.percipio.com/linked-contents/77bc3da6-2179-4fc5-819b-04977e39585f/landing"
}, {
	"title": "From Channel: Microsoft Power Platform",
	"link": "https://accenture.percipio.com/channels/4a111b96-947e-470d-a4a5-f91f98c0d8a7"
}, {
	"title": "Predictive Analytics: Case Studies for Operations",
	"link": "https://accenture.percipio.com/courses/daa86b89-5d48-4e7c-8aff-8cf8d33ef595"
}, {
	"title": "From Channel: Predictive Analytics",
	"link": "https://accenture.percipio.com/channels/84e64131-1557-11e7-9f21-659139b59eba"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Using Private Messaging &amp; Communication Tools in Slack 2020",
	"link": "https://accenture.percipio.com/courses/4969de80-86a9-44b0-b1cf-6a84244117be"
}, {
	"title": "From Channel: Slack",
	"link": "https://accenture.percipio.com/channels/548cff90-e24b-11e6-93f3-0242c0a80605"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Configuring &amp; Managing Boards in Jira Cloud",
	"link": "https://accenture.percipio.com/courses/f09b4f5e-7145-414b-9398-f6dae6b48dab"
}, {
	"title": "From Channel: JIRA",
	"link": "https://accenture.percipio.com/channels/1493dff1-1a2f-11e7-aa4b-c7a8e598b690"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Configuring Slack 2020",
	"link": "https://accenture.percipio.com/courses/cdfd9605-6667-4104-b233-93773bc39355"
}, {
	"title": "From Channel: Slack",
	"link": "https://accenture.percipio.com/channels/548cff90-e24b-11e6-93f3-0242c0a80605"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Planning &amp; Working on a Software Project in Jira Cloud",
	"link": "https://accenture.percipio.com/courses/c970c1ad-a1e1-493c-9f4e-2e0d6d8ab107"
}, {
	"title": "From Channel: JIRA",
	"link": "https://accenture.percipio.com/channels/1493dff1-1a2f-11e7-aa4b-c7a8e598b690"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Working with Google BERT: Elements of BERT",
	"link": "https://accenture.percipio.com/courses/28c05739-eb73-4c29-b887-b1e65cf1ed06"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "Creating &amp; Setting Up Projects in Jira Cloud",
	"link": "https://accenture.percipio.com/courses/ed3cf022-ec51-4129-8da0-6ee3db2e7d82"
}, {
	"title": "From Channel: JIRA",
	"link": "https://accenture.percipio.com/channels/1493dff1-1a2f-11e7-aa4b-c7a8e598b690"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Reporting in Jira Software",
	"link": "https://accenture.percipio.com/courses/5e153645-4bd7-4cf3-8a8a-c140486be7bb"
}, {
	"title": "From Channel: JIRA",
	"link": "https://accenture.percipio.com/channels/1493dff1-1a2f-11e7-aa4b-c7a8e598b690"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Using Channels in Slack 2020",
	"link": "https://accenture.percipio.com/courses/9f0925ae-a82b-47d3-9055-9e16228920a9"
}, {
	"title": "From Channel: Slack",
	"link": "https://accenture.percipio.com/channels/548cff90-e24b-11e6-93f3-0242c0a80605"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Prepare to research space rocks by using artificial intelligence",
	"link": "https://accenture.percipio.com/linked-contents/2c22ada8-1a9f-4935-8d23-884adff0a2b3/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Data Engineering Getting Started",
	"link": "https://accenture.percipio.com/courses/df850c00-2f92-11e9-9f0a-4d6965a87299"
}, {
	"title": "From Channel: Database Core Concepts",
	"link": "https://accenture.percipio.com/channels/c5d9e950-e198-11e6-91a7-0242c0a80704"
}, {
	"title": "From Channel: Data Essentials",
	"link": "https://accenture.percipio.com/channels/39583606-d235-467f-8d0c-f9fcc6244313"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "Automation Design &amp; Robotics",
	"link": "https://accenture.percipio.com/courses/929e4b80-2890-11e9-8414-5d67232f5a1a"
}, {
	"title": "From Channel: Data Science Core Concepts",
	"link": "https://accenture.percipio.com/channels/c3b14ff1-5115-11e7-b825-0db3c203a5f6"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "TensorFlow: Introduction to Machine Learning",
	"link": "https://accenture.percipio.com/courses/1d2d4510-d5f5-11e8-9555-cdf14d506670"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Contributing as a Virtual Team Member",
	"link": "https://accenture.percipio.com/courses/a823d5f0-802b-11e8-8305-21229c9dd428"
}, {
	"title": "From Channel: Working Effectively on a Team",
	"link": "https://accenture.percipio.com/channels/9c912cb0-f918-11e6-aad2-6b3c03be7fe8"
}, {
	"title": "From Channel: Virtual Collaboration",
	"link": "https://accenture.percipio.com/channels/14b2dd20-dc20-11e7-9fe8-1b7f5fcc733d"
}, {
	"title": "From Channel: Working Remotely",
	"link": "https://accenture.percipio.com/channels/3a13566c-d330-429d-bbbe-896dfd4a983f"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Virtual Work in the New Normal",
	"link": "https://accenture.percipio.com/journey/befb0daa-8525-471b-aaa5-7612c4ea29f7"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Building Resilience in Your Personal and Professional Life",
	"link": "https://accenture.percipio.com/journey/fcde2584-37d9-4795-aa51-e34a62e9b908"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Training and Development Director Journey",
	"link": "https://accenture.percipio.com/journey/6db83b77-e76c-4848-91fb-49125e1aee09"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Rookie to Rockstar: Mastering Professional Effectiveness",
	"link": "https://accenture.percipio.com/journey/19777be0-da23-473a-986a-f8eea57d485c"
}, {
	"title": "Signing in &amp; Navigating within Spaces in Confluence Web",
	"link": "https://accenture.percipio.com/courses/d3350b40-cc7c-11e8-a915-373dcac81723"
}, {
	"title": "From Channel: Confluence",
	"link": "https://accenture.percipio.com/channels/d2e69e1d-e32c-4171-b3ed-7140401d3f29"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Setting Up &amp; Managing Spaces in Confluence Web",
	"link": "https://accenture.percipio.com/courses/59557070-cc7d-11e8-a915-373dcac81723"
}, {
	"title": "From Channel: Confluence",
	"link": "https://accenture.percipio.com/channels/d2e69e1d-e32c-4171-b3ed-7140401d3f29"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Working with Space in Confluence Web",
	"link": "https://accenture.percipio.com/courses/75ac93b0-cc7e-11e8-a915-373dcac81723"
}, {
	"title": "From Channel: Confluence",
	"link": "https://accenture.percipio.com/channels/d2e69e1d-e32c-4171-b3ed-7140401d3f29"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Working with Team Members in Confluence Web",
	"link": "https://accenture.percipio.com/courses/1367f3a0-cc80-11e8-a915-373dcac81723"
}, {
	"title": "From Channel: Confluence",
	"link": "https://accenture.percipio.com/channels/d2e69e1d-e32c-4171-b3ed-7140401d3f29"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Strategies for Managing Technical Teams",
	"link": "https://accenture.percipio.com/courses/7e2b17b0-90af-11e8-90c8-c3667bdd692e"
}, {
	"title": "From Channel: Leading Teams",
	"link": "https://accenture.percipio.com/channels/d9c00100-f914-11e6-aad2-6b3c03be7fe8"
}, {
	"title": "From Channel: Cross-Functional Collaboration",
	"link": "https://accenture.percipio.com/channels/1d2fe99c-caaf-4a67-9dea-c2f7a2bdccd4"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Network Security Specialist to CloudOps Security Architect",
	"link": "https://accenture.percipio.com/journey/c621fdf6-f05e-4713-beb3-a44dbe575008"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Product Management Journey",
	"link": "https://accenture.percipio.com/journey/ca4fc9bf-d217-4f4b-a436-93970cd94bf5"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Technical Writer Journey",
	"link": "https://accenture.percipio.com/journey/c97575a4-e4dc-4f52-9d4a-bc0c5833bd11"
}, {
	"title": "Configuring Spaces in Confluence Web",
	"link": "https://accenture.percipio.com/courses/be8f4260-cc80-11e8-a915-373dcac81723"
}, {
	"title": "From Channel: Confluence",
	"link": "https://accenture.percipio.com/channels/d2e69e1d-e32c-4171-b3ed-7140401d3f29"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Enterprise Developer to DevOps Engineer",
	"link": "https://accenture.percipio.com/journey/77b97d7d-2890-4294-ae12-921579b1529d"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Network Admin to Site Reliability Engineer",
	"link": "https://accenture.percipio.com/journey/6e65a4f5-f32b-4d75-8fd7-61829eb692a5"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Business Analyst to Data Analyst",
	"link": "https://accenture.percipio.com/journey/08b48753-87f9-4ab6-bf29-37744f337651"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Visualization Mastery",
	"link": "https://accenture.percipio.com/journey/c8c2019b-23d3-49db-b897-4ac1e5827fbb"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Data for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/896d3980-d114-4754-b9d6-c6f4da257811"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Load Balancing Multi and Hybrid Cloud Solutions",
	"link": "https://accenture.percipio.com/journey/69bcb7d9-21b4-4144-843c-5f08d8e31757"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Performance Engineering Journey",
	"link": "https://accenture.percipio.com/journey/32dfa6f4-1e9b-48c9-b4d2-5f3a98fbd478"
}, {
	"title": "From Aspire Journey: Essential Math for Data Science",
	"link": "https://accenture.percipio.com/journey/a6fffedb-2b07-4926-b34f-3a8e84f04a1f"
}, {
	"title": "From Aspire Journey: Graph Analytics",
	"link": "https://accenture.percipio.com/journey/fbd8252d-803e-42e2-bc3f-6350929745e9"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "From Aspire Journey: Natural Language Processing",
	"link": "https://accenture.percipio.com/journey/d9d84430-65e2-4e30-afb2-7ed7d09ef2e2"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Cassandra",
	"link": "https://accenture.percipio.com/journey/06a9db74-5ac5-4079-9b46-cedca770defc"
}, {
	"title": "From Aspire Journey: Data Infrastructure with Apache Kafka",
	"link": "https://accenture.percipio.com/journey/f83f1d5e-c998-4099-92cd-6de02128ee06"
}, {
	"title": "From Aspire Journey: Data Analytics with Snowflake",
	"link": "https://accenture.percipio.com/journey/0f621358-89a6-46d7-ad63-a6b43acfe26b"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Knowing When to Take Strategic Risks",
	"link": "https://accenture.percipio.com/courses/2fc73490-6fb8-11e8-90ac-1dee3484b540"
}, {
	"title": "From Channel: Strategic Planning &amp; Execution",
	"link": "https://accenture.percipio.com/channels/dbc88b50-205d-11e7-a06b-196ddb80a7e9"
}, {
	"title": "From Channel: Digital Transformation Strategy",
	"link": "https://accenture.percipio.com/channels/1ac90cd0-dc1f-11e7-9fe8-1b7f5fcc733d"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Public Relations Manager Journey",
	"link": "https://accenture.percipio.com/journey/f512334c-435c-4fd1-bac0-9d047b682992"
}, {
	"title": "From Aspire Journey: Event Planner Journey",
	"link": "https://accenture.percipio.com/journey/20db72de-4a6e-41bb-bd8e-05e158afe9cf"
}, {
	"title": "From Aspire Journey: Accountant Journey",
	"link": "https://accenture.percipio.com/journey/b87bb233-bd43-4a5d-bbeb-e85e9395e95b"
}, {
	"title": "From Aspire Journey: Residential Community Manager Journey",
	"link": "https://accenture.percipio.com/journey/63b130ce-98d4-48da-84f9-c6d8088b60be"
}, {
	"title": "From Aspire Journey: Content Strategy &amp; Curation Journey",
	"link": "https://accenture.percipio.com/journey/088c9d24-ff47-4386-80a3-12987dec06d0"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "Classify types of space rocks in random photos by using artificial intelligence",
	"link": "https://accenture.percipio.com/linked-contents/955de0be-6a4c-4db6-9792-770d25df4fcd/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Use AI to recognize objects in images by using the Custom Vision service",
	"link": "https://accenture.percipio.com/linked-contents/cd2d7a31-13f7-4354-996d-a4a9f0d5921b/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Enterprise Services: Machine Learning Implementation on Google Cloud Platform",
	"link": "https://accenture.percipio.com/courses/7c3bc5de-185d-40bb-947c-c0070f25a8c2"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "Predictive Analytics: Identifying Machine Failures",
	"link": "https://accenture.percipio.com/courses/bd748cff-56c5-4199-a09e-a7ee5628d1f0"
}, {
	"title": "From Channel: Predictive Analytics",
	"link": "https://accenture.percipio.com/channels/84e64131-1557-11e7-9f21-659139b59eba"
}, {
	"title": "From Aspire Journey: Predictive Analytics Journey",
	"link": "https://accenture.percipio.com/journey/816fbe2a-efba-49ba-8538-09d3f7f2c7a5"
}, {
	"title": "Machine Learning",
	"link": "https://accenture.percipio.com/courses/560b8854-b388-11e7-9c7a-4e99e0664338"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Reinforcement Learning",
	"link": "https://accenture.percipio.com/courses/560baf69-b388-11e7-9c7a-4e99e0664338"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Constraint Satisfaction Problems",
	"link": "https://accenture.percipio.com/courses/560b1335-b388-11e7-9c7a-4e99e0664338"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Search Problems",
	"link": "https://accenture.percipio.com/courses/560aec2b-b388-11e7-9c7a-4e99e0664338"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Choosing and Using the Best Solution",
	"link": "https://accenture.percipio.com/courses/632280e3-4d1f-11e7-9a6a-bef7011cdcad"
}, {
	"title": "From Channel: Decision Making",
	"link": "https://accenture.percipio.com/channels/4c8e4c00-2061-11e7-a06b-196ddb80a7e9"
}, {
	"title": "From Channel: The Art of Great Consulting Leadercamp",
	"link": "https://accenture.percipio.com/channels/1bd96774-f355-4cef-b697-556733207fd0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Operations Research Analyst Journey",
	"link": "https://accenture.percipio.com/journey/e71a7206-208d-486e-84d7-1e89cd617cf1"
}, {
	"title": "From Aspire Journey: Finance for Non-Financial Professionals Journey",
	"link": "https://accenture.percipio.com/journey/3d9606b8-3c8f-4a41-8e50-238d888fc2aa"
}, {
	"title": "From Aspire Journey: Customer Service Representative Journey",
	"link": "https://accenture.percipio.com/journey/fb44fa52-d15d-4c4d-b900-771dbdfc32a5"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Public Relations Manager Journey",
	"link": "https://accenture.percipio.com/journey/f512334c-435c-4fd1-bac0-9d047b682992"
}, {
	"title": "From Aspire Journey: Event Planner Journey",
	"link": "https://accenture.percipio.com/journey/20db72de-4a6e-41bb-bd8e-05e158afe9cf"
}, {
	"title": "From Aspire Journey: Office Manager Journey",
	"link": "https://accenture.percipio.com/journey/a2331f79-b8db-41c9-87f4-ff003e075c16"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Residential Community Manager Journey",
	"link": "https://accenture.percipio.com/journey/63b130ce-98d4-48da-84f9-c6d8088b60be"
}, {
	"title": "From Aspire Journey: Executive Assistant Journey",
	"link": "https://accenture.percipio.com/journey/b2c7eab5-5052-455e-9ae1-aa755bf115fe"
}, {
	"title": "From Aspire Journey: Content Strategy &amp; Curation Journey",
	"link": "https://accenture.percipio.com/journey/088c9d24-ff47-4386-80a3-12987dec06d0"
}, {
	"title": "Developing a Successful Team",
	"link": "https://accenture.percipio.com/courses/56303e51-fea5-11e6-8638-0242c0a80b06"
}, {
	"title": "From Channel: Leading Teams",
	"link": "https://accenture.percipio.com/channels/d9c00100-f914-11e6-aad2-6b3c03be7fe8"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Inspiring Engagement and Resilience",
	"link": "https://accenture.percipio.com/journey/8a8c741f-8d96-4e28-9e84-d77f632ed967"
}, {
	"title": "From Aspire Journey: Sales Manager Journey",
	"link": "https://accenture.percipio.com/journey/18ca4f0a-529a-49dc-93b6-a63ab43d4aed"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "Effective Team Communication",
	"link": "https://accenture.percipio.com/courses/56310198-fea5-11e6-8638-0242c0a80b06"
}, {
	"title": "From Channel: Working Effectively on a Team",
	"link": "https://accenture.percipio.com/channels/9c912cb0-f918-11e6-aad2-6b3c03be7fe8"
}, {
	"title": "From Aspire Journey: Enterprise Developer to Full Stack Developer",
	"link": "https://accenture.percipio.com/journey/28311a37-b331-4933-9d69-c9763d61827a"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Software Project Lead to Advanced Scrum Master",
	"link": "https://accenture.percipio.com/journey/87c2500d-cafc-458f-a680-859a2dc3c6a0"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Product Management Journey",
	"link": "https://accenture.percipio.com/journey/ca4fc9bf-d217-4f4b-a436-93970cd94bf5"
}, {
	"title": "From Aspire Journey: Building Resilience in Your Personal and Professional Life",
	"link": "https://accenture.percipio.com/journey/fcde2584-37d9-4795-aa51-e34a62e9b908"
}, {
	"title": "From Aspire Journey: Sales Manager Journey",
	"link": "https://accenture.percipio.com/journey/18ca4f0a-529a-49dc-93b6-a63ab43d4aed"
}, {
	"title": "From Aspire Journey: Agile for Software Development",
	"link": "https://accenture.percipio.com/journey/43d01c60-e3ca-4e12-8d32-d3fc3a2a693a"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: Training and Development Director Journey",
	"link": "https://accenture.percipio.com/journey/6db83b77-e76c-4848-91fb-49125e1aee09"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Office Manager Journey",
	"link": "https://accenture.percipio.com/journey/a2331f79-b8db-41c9-87f4-ff003e075c16"
}, {
	"title": "From Aspire Journey: Corporate Trainer Journey",
	"link": "https://accenture.percipio.com/journey/f47cce47-53e2-4d25-b448-a5154efc0ebb"
}, {
	"title": "From Aspire Journey: Retail Sales Associate Journey",
	"link": "https://accenture.percipio.com/journey/a6db9940-47f4-43d1-b4e3-eeeb2fa3796e"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Product Owner (2022 Update)",
	"link": "https://accenture.percipio.com/journey/21412526-ff81-4258-a793-1a746242f1b8"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scaled Agile Leader (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9dc8ca95-7454-49b3-8f4e-3585de1aed0f"
}, {
	"title": "From Aspire Journey: Scrum Team Member to Scrum Master (2022 Update)",
	"link": "https://accenture.percipio.com/journey/9360685d-1c46-4c59-926a-744e4db8f28a"
}, {
	"title": "Facing Virtual Team Challenges",
	"link": "https://accenture.percipio.com/courses/bc63a4b0-9d54-11e7-acaf-fb27c90ac968"
}, {
	"title": "From Channel: Managing Virtual Teams",
	"link": "https://accenture.percipio.com/channels/502775a1-155b-11e7-84ad-c7901500d497"
}, {
	"title": "From Channel: Virtual Collaboration",
	"link": "https://accenture.percipio.com/channels/14b2dd20-dc20-11e7-9fe8-1b7f5fcc733d"
}, {
	"title": "From Channel: Business Continuity",
	"link": "https://accenture.percipio.com/channels/e27c4b77-f05f-4781-8e1a-48926005796d"
}, {
	"title": "From Channel: Working Remotely",
	"link": "https://accenture.percipio.com/channels/3a13566c-d330-429d-bbbe-896dfd4a983f"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Product Management Journey",
	"link": "https://accenture.percipio.com/journey/ca4fc9bf-d217-4f4b-a436-93970cd94bf5"
}, {
	"title": "From Aspire Journey: Building Resilience in Your Personal and Professional Life",
	"link": "https://accenture.percipio.com/journey/fcde2584-37d9-4795-aa51-e34a62e9b908"
}, {
	"title": "From Aspire Journey: Inspiring Engagement and Resilience",
	"link": "https://accenture.percipio.com/journey/8a8c741f-8d96-4e28-9e84-d77f632ed967"
}, {
	"title": "From Aspire Journey: Corporate Trainer Journey",
	"link": "https://accenture.percipio.com/journey/f47cce47-53e2-4d25-b448-a5154efc0ebb"
}, {
	"title": "Taking Your Team to the Next Level with Delegation",
	"link": "https://accenture.percipio.com/courses/5d4eee30-9d5e-11e7-acaf-fb27c90ac968"
}, {
	"title": "From Channel: Delegation",
	"link": "https://accenture.percipio.com/channels/c7b09740-f914-11e6-aad2-6b3c03be7fe8"
}, {
	"title": "From Aspire Journey: Security Analyst to Security Architect",
	"link": "https://accenture.percipio.com/journey/f63de512-fb1c-4094-be45-f0d37e9050b1"
}, {
	"title": "From Aspire Journey: Penetration Tester to SecOps Engineer",
	"link": "https://accenture.percipio.com/journey/e48615df-ae72-416f-9f6b-13f939b8a20a"
}, {
	"title": "From Aspire Journey: DevOps Engineer to Cloud Architect",
	"link": "https://accenture.percipio.com/journey/b2587ab1-651a-4f3f-b4ae-0a18e1342052"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst",
	"link": "https://accenture.percipio.com/journey/51f738e2-1f09-4f3a-a2f7-50e498221243"
}, {
	"title": "From Aspire Journey: Web App Vulnerability Analyst - 2022 Update",
	"link": "https://accenture.percipio.com/journey/a1959eb1-40e1-4e2d-9708-bcb40979c84d"
}, {
	"title": "Adversarial Problems",
	"link": "https://accenture.percipio.com/courses/560b3a3c-b388-11e7-9c7a-4e99e0664338"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Encouraging Team Communication and Collaboration",
	"link": "https://accenture.percipio.com/courses/5630655c-fea5-11e6-8638-0242c0a80b06"
}, {
	"title": "From Channel: Collaboration",
	"link": "https://accenture.percipio.com/channels/758dfac0-f914-11e6-aad2-6b3c03be7fe8"
}, {
	"title": "From Channel: Leading Teams",
	"link": "https://accenture.percipio.com/channels/d9c00100-f914-11e6-aad2-6b3c03be7fe8"
}, {
	"title": "From Aspire Journey: Python Novice to Pythonista",
	"link": "https://accenture.percipio.com/journey/1fe73a9b-d238-477e-bc15-273e52f8b7ba"
}, {
	"title": "From Aspire Journey: Software Project Analyst to Senior Software Project Manager",
	"link": "https://accenture.percipio.com/journey/e07f023e-cf7f-48b9-b8ed-eff70655b700"
}, {
	"title": "From Aspire Journey: Programmer to Secure Agile Programmer",
	"link": "https://accenture.percipio.com/journey/25b34da0-f224-4b39-a803-908da2e2b5c0"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "From Aspire Journey: Web Programmer to Apprentice Programmer",
	"link": "https://accenture.percipio.com/journey/11a8756a-88d2-4143-a834-27dcb28ad986"
}, {
	"title": "From Aspire Journey: Apprentice Developer to Journeyman Developer",
	"link": "https://accenture.percipio.com/journey/d543a0bc-268e-42e3-9ab8-9c6ff4b1a667"
}, {
	"title": "From Aspire Journey: Virtual Work in the New Normal",
	"link": "https://accenture.percipio.com/journey/befb0daa-8525-471b-aaa5-7612c4ea29f7"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Programmer to API Developer",
	"link": "https://accenture.percipio.com/journey/d2e09d87-d502-4e89-af19-e45bf3e1ae77"
}, {
	"title": "From Aspire Journey: Developer to Software Architect",
	"link": "https://accenture.percipio.com/journey/3360ace2-8d76-48af-a418-b5831c12e9a6"
}, {
	"title": "From Aspire Journey: Building Resilience in Your Personal and Professional Life",
	"link": "https://accenture.percipio.com/journey/fcde2584-37d9-4795-aa51-e34a62e9b908"
}, {
	"title": "From Aspire Journey: Inspiring Engagement and Resilience",
	"link": "https://accenture.percipio.com/journey/8a8c741f-8d96-4e28-9e84-d77f632ed967"
}, {
	"title": "From Aspire Journey: Sales Manager Journey",
	"link": "https://accenture.percipio.com/journey/18ca4f0a-529a-49dc-93b6-a63ab43d4aed"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "From Aspire Journey: Data Analysis with R",
	"link": "https://accenture.percipio.com/journey/28b956bb-0466-41e1-9216-c611f6a4207f"
}, {
	"title": "From Aspire Journey: Serverless Deployments for Developers",
	"link": "https://accenture.percipio.com/journey/0ee8bed0-3963-4cc8-9b04-96336a0d2598"
}, {
	"title": "From Aspire Journey: Java Novice to Javanista",
	"link": "https://accenture.percipio.com/journey/717919cf-1692-4bcd-b1ab-db5304aedcad"
}, {
	"title": "From Aspire Journey: Training and Development Director Journey",
	"link": "https://accenture.percipio.com/journey/6db83b77-e76c-4848-91fb-49125e1aee09"
}, {
	"title": "From Aspire Journey: Enriched Web Development with Angular 11",
	"link": "https://accenture.percipio.com/journey/23932b1b-3e23-419b-9c70-063acd2eefe1"
}, {
	"title": "From Aspire Journey: Building Advanced Docker Skills",
	"link": "https://accenture.percipio.com/journey/0a092bf1-c93b-4d9d-969f-885c97819d6e"
}, {
	"title": "From Aspire Journey: Go Programming Essentials",
	"link": "https://accenture.percipio.com/journey/e6f3b466-4605-4429-80e9-023581a995dd"
}, {
	"title": "From Aspire Journey: Javanista to Java Master",
	"link": "https://accenture.percipio.com/journey/4bea8592-3c69-4d9b-8bbe-5532b851f561"
}, {
	"title": "From Aspire Journey: Office Manager Journey",
	"link": "https://accenture.percipio.com/journey/a2331f79-b8db-41c9-87f4-ff003e075c16"
}, {
	"title": "From Aspire Journey: Building Advanced Kubernetes Skills",
	"link": "https://accenture.percipio.com/journey/4638674f-f804-4aa1-bb27-29d44a129da3"
}, {
	"title": "From Aspire Journey: Corporate Trainer Journey",
	"link": "https://accenture.percipio.com/journey/f47cce47-53e2-4d25-b448-a5154efc0ebb"
}, {
	"title": "From Aspire Journey: Retail Sales Associate Journey",
	"link": "https://accenture.percipio.com/journey/a6db9940-47f4-43d1-b4e3-eeeb2fa3796e"
}, {
	"title": "From Aspire Journey: Developer Fundamentals",
	"link": "https://accenture.percipio.com/journey/0aef97f4-05c5-49b4-9305-c6a2633ee1e6"
}, {
	"title": "From Aspire Journey: Programming Python in Action",
	"link": "https://accenture.percipio.com/journey/ae8549ae-7596-45a9-a6f8-1b422e5ac0ed"
}, {
	"title": "From Aspire Journey: Programming in C++",
	"link": "https://accenture.percipio.com/journey/62ecfe8b-c3b0-4872-9dd5-16f81a004d31"
}, {
	"title": "From Aspire Journey: C Programming Proficiency",
	"link": "https://accenture.percipio.com/journey/33639d60-30b0-4061-92fd-ed06b993310c"
}, {
	"title": "Cloud Value Proposition: Microsoft Azure for Decision Makers",
	"link": "https://accenture.percipio.com/courses/d602549f-a1d8-41f4-97e4-d0d876d7110b"
}, {
	"title": "From Channel: Cloud Basics",
	"link": "https://accenture.percipio.com/channels/17913de0-df49-11e6-93f3-0242c0a80605"
}, {
	"title": "From Aspire Journey: Cloud Computing for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/f5620461-72c3-414b-a253-e0ff2dec74a4"
}, {
	"title": "Machine Learning Implementation",
	"link": "https://accenture.percipio.com/courses/b29e14b0-8f20-11e8-909a-5518645c4426"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "OpenCV: Advanced Image Operations",
	"link": "https://accenture.percipio.com/courses/123fbf30-bb63-4a6e-9a84-f57b8147fb58"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Pythonista to Python Master",
	"link": "https://accenture.percipio.com/journey/2b934260-635a-4d82-b822-b06bab1fecb5"
}, {
	"title": "Positive Atmosphere: How Organizational Learning Drives Positive Change",
	"link": "https://accenture.percipio.com/courses/24f2b910-e4b1-11e6-a792-0242c0a80b09"
}, {
	"title": "From Channel: Establishing a Positive Work Culture",
	"link": "https://accenture.percipio.com/channels/46accd20-e718-11e6-9835-f723b46a2688"
}, {
	"title": "From Channel: Learning &amp; Development",
	"link": "https://accenture.percipio.com/channels/48862860-e715-11e6-9835-f723b46a2688"
}, {
	"title": "From Aspire Journey: AI Apprentice to AI Architect",
	"link": "https://accenture.percipio.com/journey/32208c10-c234-473c-afd5-dd751c35fa76"
}, {
	"title": "From Aspire Journey: Building Resilience in Your Personal and Professional Life",
	"link": "https://accenture.percipio.com/journey/fcde2584-37d9-4795-aa51-e34a62e9b908"
}, {
	"title": "From Aspire Journey: Training and Development Director Journey",
	"link": "https://accenture.percipio.com/journey/6db83b77-e76c-4848-91fb-49125e1aee09"
}, {
	"title": "From Aspire Journey: Agile for All",
	"link": "https://accenture.percipio.com/journey/18b42c36-026e-48e0-9a52-cf9b78a4e119"
}, {
	"title": "CompTIA Cloud Essentials+: Cloud Native Apps &amp; Cloud Data Analytics",
	"link": "https://accenture.percipio.com/courses/700f8c5f-7e4a-40b9-875e-fdf346affb0f"
}, {
	"title": "From Channel: Cloud Basics",
	"link": "https://accenture.percipio.com/channels/17913de0-df49-11e6-93f3-0242c0a80605"
}, {
	"title": "From Channel: CompTIA Cloud Essentials+",
	"link": "https://accenture.percipio.com/channels/ae435756-5047-4b13-9a7a-60af65cb05da"
}, {
	"title": "5G Machine-type Communication: Defining Machine-type 5G",
	"link": "https://accenture.percipio.com/courses/df8907ed-a16a-4b80-b882-95cb54d9e8c7"
}, {
	"title": "From Channel: Mobility Core Concepts",
	"link": "https://accenture.percipio.com/channels/ab95b9d0-e403-11e6-b0af-a72b05174c38"
}, {
	"title": "From Aspire Journey: 5G Technologies and Practices",
	"link": "https://accenture.percipio.com/journey/2325d056-319c-4a1a-b1d9-699ac91fd594"
}, {
	"title": "Convolutional Neural Networks: Implementing &amp; Training",
	"link": "https://accenture.percipio.com/courses/aa8bdc9e-e874-4822-89fd-74c2cd8d9e01"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: ML Programmer to ML Architect",
	"link": "https://accenture.percipio.com/journey/17eeca71-f2bd-4558-8d0f-df7d0122139a"
}, {
	"title": "Enrich data and predictions with Customer Insights",
	"link": "https://accenture.percipio.com/linked-contents/f8e81b08-58e8-4530-9491-999b29298ff9/landing"
}, {
	"title": "From Channel: Microsoft Dynamics Administration",
	"link": "https://accenture.percipio.com/channels/64b58d31-161a-11e7-bf96-7fcd66e560cd"
}, {
	"title": "Understanding Bots: Chatbot Advanced Concepts and Features",
	"link": "https://accenture.percipio.com/courses/b152cbf5-edb7-43fa-815b-04a218673b5f"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Understanding Bots: Building Bots with Dialogflow",
	"link": "https://accenture.percipio.com/courses/155748ca-da7a-4a8f-8f47-f981da63ac2b"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Understanding Bots: Amazon Alexa Skills Development",
	"link": "https://accenture.percipio.com/courses/59721de0-d279-4720-8de7-b90bc8b9f35c"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Understanding Bots: Chatbot Architecture",
	"link": "https://accenture.percipio.com/courses/dd5b9776-f281-488b-80ec-c0a48f11b59e"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Identify the tasks of a data engineer in a cloud-hosted architecture",
	"link": "https://accenture.percipio.com/linked-contents/8acdce3b-054c-4804-90d7-7f11a14f74bb/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Deploy Azure Sentinel and connect data sources",
	"link": "https://accenture.percipio.com/linked-contents/9a01c983-0e29-46fd-8970-c73cc510c598/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Build a Web App with Refreshable Machine Learning Models",
	"link": "https://accenture.percipio.com/linked-contents/93d7a60c-ea9b-4331-8472-2dec3d21dbb1/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Create a machine learning model for offline use on a Windows device",
	"link": "https://accenture.percipio.com/linked-contents/0830b5b3-44c5-47c4-b9b1-5d45e3c3aa3b/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Create and manage Cognitive Services",
	"link": "https://accenture.percipio.com/linked-contents/dae7f058-9509-4919-8adf-b7c85d4bfbcd/landing"
}, {
	"title": "From Channel: Azure Architecture",
	"link": "https://accenture.percipio.com/channels/a2783630-e196-11e6-93f3-0242c0a80605"
}, {
	"title": "Mitigating Security Risks: Managing Information, Cloud, &amp; Data Security Risks",
	"link": "https://accenture.percipio.com/courses/9538b588-ff6b-498b-a451-37184c63f6f5"
}, {
	"title": "From Channel: Security Core Concepts",
	"link": "https://accenture.percipio.com/channels/51f5c3d0-e254-11e6-93f3-0242c0a80605"
}, {
	"title": "From Aspire Journey: Security Essentials for Decision-makers and Leaders",
	"link": "https://accenture.percipio.com/journey/06b8fa66-473f-4233-ac5e-769d01e1f597"
}, {
	"title": "Work with product recommendations in Dynamics 365 Commerce",
	"link": "https://accenture.percipio.com/linked-contents/879768ac-11dd-4a78-b4c8-adce949456bc/landing"
}, {
	"title": "From Channel: Microsoft Dynamics Administration",
	"link": "https://accenture.percipio.com/channels/64b58d31-161a-11e7-bf96-7fcd66e560cd"
}, {
	"title": "CompTIA CASP+: Emerging Technologies &amp; SecDevOps",
	"link": "https://accenture.percipio.com/courses/9eb9d486-d228-4b0a-8f66-9dd8cf19ccfd"
}, {
	"title": "From Channel: CompTIA CASP+",
	"link": "https://accenture.percipio.com/channels/c28e4271-2c23-11e7-83d1-dba0327abefc"
}, {
	"title": "TensorFlow: Simple Regression &amp; Classification Models",
	"link": "https://accenture.percipio.com/courses/436d8710-d5f7-11e8-9555-cdf14d506670"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Neural Network &amp; Neuroph Framework",
	"link": "https://accenture.percipio.com/courses/a4c463a0-9379-11e8-a214-ff32213eb624"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Expert Systems &amp; Reinforcement Learning",
	"link": "https://accenture.percipio.com/courses/ce2e8e00-937e-11e8-a214-ff32213eb624"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "TensorFlow: Building Autoencoders",
	"link": "https://accenture.percipio.com/courses/7ff89110-de95-11e8-8514-870161d6a7ec"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "API Management and DevOps",
	"link": "https://accenture.percipio.com/courses/729ff32e-81c2-489d-a3f7-844396094109"
}, {
	"title": "From Channel: APIs",
	"link": "https://accenture.percipio.com/channels/eb8c3571-3bea-11e7-9f4b-31846c93960b"
}, {
	"title": "From Aspire Journey: Software Tester to DevOps Automated Tester",
	"link": "https://accenture.percipio.com/journey/e84847be-ddd0-4825-9b7f-2d3ae780dd89"
}, {
	"title": "Explainability for Cloud Deployments: Applying Explainability in CloudOps",
	"link": "https://accenture.percipio.com/courses/70d67b26-ac21-4e00-b4fa-4d24cefe20e3"
}, {
	"title": "From Channel: CloudOps",
	"link": "https://accenture.percipio.com/channels/58040990-e29e-48df-a84a-24e968707ada"
}, {
	"title": "From Aspire Journey: Infrastructure Support Engineer to CloudOps Engineer",
	"link": "https://accenture.percipio.com/journey/ad448a45-f6fb-483d-8052-639db011e8e4"
}, {
	"title": "Harnessing Data Volume &amp; Velocity: Turning Big Data into Smart Data",
	"link": "https://accenture.percipio.com/courses/10ba0850-3a76-11e9-ac6a-eb951a242beb"
}, {
	"title": "From Channel: Data Science Core Concepts",
	"link": "https://accenture.percipio.com/channels/c3b14ff1-5115-11e7-b825-0db3c203a5f6"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "TensorFlow: Word Embeddings &amp; Recurrent Neural Networks",
	"link": "https://accenture.percipio.com/courses/1bb26e95-5ab4-4f35-92a8-2be6a9c3bd24"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "TensorFlow: K-means Clustering",
	"link": "https://accenture.percipio.com/courses/7f9e1500-de95-11e8-8514-870161d6a7ec"
}, {
	"title": "From Channel: Artificial Intelligence (AI)",
	"link": "https://accenture.percipio.com/channels/b30e6050-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "Machine Learning &amp; Deep Learning Tools in the Cloud",
	"link": "https://accenture.percipio.com/courses/bb0e38a0-3691-11e9-bbd3-d375c4b17ab9"
}, {
	"title": "From Channel: Machine Learning",
	"link": "https://accenture.percipio.com/channels/ad645560-b5a3-11e7-9235-e7f6f925afa4"
}, {
	"title": "From Aspire Journey: Data Analyst to Data Scientist",
	"link": "https://accenture.percipio.com/journey/b4931bbc-7410-4a32-a4b1-0e722ba6c93b"
}, {
	"title": "Download on the App Store",
	"link": "https://accenture.percipio.comhttps://percipioapp.page.link/wtQ4"
}];
// import the courses from Link.json file instead of hardcoding them
courses = require('./Link.json');
export function displayCourses() {
let courseList = document.getElementById("courseList");
for (let i = 0; i < courses.length; i++) {
let course = courses[i];
let courseLink = document.createElement("a");
courseLink.setAttribute("href", course.link);
courseLink.innerHTML = course.title;
courseList.appendChild(courseLink);
// add a line break
courseList.appendChild(document.createElement("br"));
}
}


