import projectsData from "../projects.json";

type RawProject = {
  id: number;
  name: string;
  category: string;
  location: string;
  client: string;
  function: string;
  keyConcept: string;
  features: string[];
  staffCount?: number;
  staffType?: string;
  duration?: string;
  year: string;
  value: string;
  consultant?: string;
  status?: string;
  image?: string;
};

type RawJson = {
  categories: Array<{ id: string; name: string; description: string }>;
  projects: RawProject[];
};

const manualImageMatches: Record<string, string> = {
  "Dr. Ali Birra General Hospital": "/images/hospital.jpg",
  "Kebede Mixed Use G+34": "/images/kebede.jpg",
  "Dr. Ali Birra Cancer Guest House": "/images/dr ali bira guesthouse.jpg",
  "Churchill Hotel": "/images/churchil hotel.jpg",
  "Haramaya University Guest House":
    "/images/haramaya university guest house.jpg",
  "Teskaro Behame G+12": "/images/teskaro building.jpg",
  "Tsehay 36 Apartment": "/images/tsehay apartama.jpg",
  "Haramaya University Campus": "/images/haramaya admin building.jpg",
  "Ecole des Lumieres School": "/images/echole des lumires.jpg",
  "NISS Building": "/images/niss building.jpg",
  "City Light Real Estate": "/images/city light realstate.jpg",
  "Greenland Tour and Hotel": "/images/greenland and tour hotel.jpg",
  "Bule Hora International Stadium": "/images/bule hora estadium.jpg",
  "Bule Hora University": "/images/bule hora university.jpg",
  "BM Housing Corporation 3B+G+12": "/images/bm housing plc.jpg",
  "Birhanu Amare Mixed-Use": "/images/brhane amare building.jpg",
  "Merkato Mixed-Use": "/images/merkato mixed use.jpg",
  "Ato Asebe Apartment Hotel 2B+G+18": "/images/ato asebe hotel apartement.jpg",
  "Hazal Real Estate": "/images/hazal-real-estate.jpg",
  "Akebabi Malmat PLC Commercial":
    "/images/akababi malmat mixed commercial.jpg",
  "Tiya-Suten Heritage Park": "/images/tiya-suten-heritage.jpg",
  "Haramaya University Admin Building": "/images/haramaya admin building.jpg",
  "Suzo Industry PLC": "/images/suko industrial-plc.jpg",
  "Experience Clothing Industrial Park": "/images/experiance clothing.jpg",
  "Axum International Airport": "/images/axum-intern-airport.jpg",
  "Jimma International Airport": "/images/jimma-international-airport.jpg",
  "Haramaya University Bus Terminal": "/images/haremaya-bus-terminal.jpg",
  "Gambela International Airport": "/images/gambela-airport.jpg",
  "Bule Hora Road Construction A": "/images/bulehora-road-construction-A.jpg",
  "Bule Hora Road Construction B": "/images/bule-hora-road-construction-B.jpg",
  "Irrigation Project 1": "/images/hydrolics-irrigation.jpg",
  "Irrigation Project 2": "/images/hydrolics-irrigation-B.jpg",
  "Sherero Bridge": "/images/sidama-bridge-project.jpg",
  "Burure Bridge": "/images/bridge-projects.jpg",
  "Aredo Bridge": "/images/bridge-projects.jpg",
  "Boreshebele Bridge": "/images/sidama-bridge-project.jpg",
  "Habesha Steel Factory": "/images/habesha-steel.jpg",
  "Tomato Factory": "/images/tomato-factory.jpg",
  "Institut Africain de Djibouti": "/images/institute-of-africa-de-djoubti.jpg",
  "Ersido Lemengo Food Complex": "/images/ersido-food-complex.jpg",
};

const categoryOverrides: Record<string, string> = {
  "Sherero Bridge": "road-works",
  "Burure Bridge": "road-works",
};

export interface ContentItem {
  id: string;
  number: string;
  title: string;
  project: string;
  function: string;
  location: string;
  client: string;
  value: string;
  year: string;
  duration: string;
  status: string;
  keyConcept: string[];
  features: string[];
  team: string;
  consultant: string;
  image: string | null;
  hasImage: boolean;
  placeholder: string;
}

const typedData = projectsData as RawJson;

function toUpperWords(value: string) {
  return value.toUpperCase();
}

function compactLabel(value: string) {
  const normalized = value.toLowerCase();

  if (normalized.includes("hospital")) return "HEALTHCARE";
  if (normalized.includes("mixed-use")) return "MIXED-USE";
  if (normalized.includes("hotel")) return "HOSPITALITY";
  if (normalized.includes("guest")) return "INSTITUTIONAL";
  if (normalized.includes("residential") || normalized.includes("apartment"))
    return "RESIDENTIAL";
  if (normalized.includes("commercial")) return "COMMERCIAL";
  if (
    normalized.includes("university") ||
    normalized.includes("school") ||
    normalized.includes("educational")
  )
    return "EDUCATIONAL";
  if (normalized.includes("airport") || normalized.includes("terminal"))
    return "AVIATION";
  if (normalized.includes("road")) return "HIGHWAY";
  if (normalized.includes("bridge")) return "BRIDGE";
  if (normalized.includes("irrigation") || normalized.includes("water"))
    return "WATER RESOURCE";
  if (normalized.includes("heritage")) return "HERITAGE";
  if (normalized.includes("factory") || normalized.includes("industrial"))
    return "INDUSTRIAL";
  if (normalized.includes("feasibility")) return "FEASIBILITY";
  if (normalized.includes("environmental")) return "ASSESSMENT";

  return toUpperWords(value.split(" ").slice(0, 2).join(" "));
}

function normalizeImage(image?: string) {
  if (!image) return null;
  return image.startsWith("/") ? image : `/${image}`;
}

function resolveMatchedImage(project: RawProject) {
  return manualImageMatches[project.name] ?? normalizeImage(project.image);
}

function resolveCategory(project: RawProject) {
  return categoryOverrides[project.name] ?? project.category;
}

function buildContentItem(project: RawProject, index: number): ContentItem {
  const image = resolveMatchedImage(project);
  const duration = project.duration || "To be confirmed";
  const status = project.status || "Pending image update";
  const staffDescription = project.staffCount
    ? `${project.staffCount} staff${project.staffType ? ` • ${project.staffType}` : ""}`
    : project.staffType || "Team details available in profile";

  return {
    id: `${project.category}-${project.id}`,
    number: String(index + 1).padStart(2, "0"),
    title: compactLabel(project.function || project.name),
    project: toUpperWords(project.name),
    function: project.function,
    location: project.location,
    client: project.client,
    value: project.value,
    year: project.year,
    duration,
    status,
    keyConcept: [project.keyConcept],
    features: project.features,
    team: staffDescription,
    consultant: project.consultant || "HH Consulting Architects & Engineers",
    image,
    hasImage: Boolean(image),
    placeholder: "IMAGE COMING SOON",
  };
}

const groupedProjects = typedData.projects.reduce<Record<string, RawProject[]>>(
  (acc, project) => {
    const effectiveCategory = resolveCategory(project);
    acc[effectiveCategory] ||= [];
    acc[effectiveCategory].push({
      ...project,
      category: effectiveCategory,
    });
    return acc;
  },
  {},
);

export const projectContentByCategory: Record<string, ContentItem[]> =
  Object.fromEntries(
    Object.entries(groupedProjects).map(([categoryId, projects]) => [
      categoryId,
      projects.map((project, index) => buildContentItem(project, index)),
    ]),
  );

export const projectCategories = typedData.categories;

export const legacyContentByCategory: Record<string, ContentItem[]> = {
  "site-works": [
    {
      id: "site-works-niss",
      number: "01",
      title: "INSTITUTIONAL",
      project: "NISS BUILDING",
      function: "Government Facility",
      location: "Addis Ababa, Ethiopia",
      client: "Ethiopian Airlines Group",
      value: "7,903,831 ETB",
      year: "2020",
      duration: "Project documentation and supervision",
      status: "Completed",
      keyConcept: ["Security design"],
      features: ["Office spaces", "Security systems", "Parking", "Utilities"],
      team: "Architects, project management, and site engineering support",
      consultant: "HH Consulting Architects & Engineers",
      image: "/images/niss building.jpg",
      hasImage: true,
      placeholder: "IMAGE COMING SOON",
    },
    {
      id: "site-works-city-light",
      number: "02",
      title: "REAL ESTATE",
      project: "CITY LIGHT REAL ESTATE",
      function: "Residential Development",
      location: "Jemo, Addis Ababa",
      client: "City Light",
      value: "1,000,000,000 ETB",
      year: "2016",
      duration: "Design stage",
      status: "Completed",
      keyConcept: ["Urban development"],
      features: [
        "Residential units",
        "Landscaping",
        "Amenities",
        "Infrastructure",
      ],
      team: "Architects and planning support",
      consultant: "HH Consulting Architects & Engineers",
      image: "/images/city light realstate.jpg",
      hasImage: true,
      placeholder: "IMAGE COMING SOON",
    },
  ],
  presentations: [
    {
      id: "presentations-ecole",
      number: "01",
      title: "EDUCATIONAL",
      project: "ECOLE DES LUMIERES SCHOOL",
      function: "International School",
      location: "Republic of Djibouti",
      client: "Ecole des Lumieres",
      value: "USD 25,000",
      year: "2020",
      duration: "Presentation and concept development",
      status: "Completed",
      keyConcept: ["International standards"],
      features: ["Classrooms", "Labs", "Library", "Sports facilities"],
      team: "Architectural and CAD support",
      consultant: "HH Consulting Architects & Engineers",
      image: "/images/echole des lumires.jpg",
      hasImage: true,
      placeholder: "IMAGE COMING SOON",
    },
    {
      id: "presentations-institut",
      number: "02",
      title: "EDUCATIONAL",
      project: "INSTITUT AFRICAIN DE DJIBOUTI",
      function: "Educational Institution",
      location: "Republic of Djibouti",
      client: "Institut Africain de Djibouti",
      value: "USD 25,000",
      year: "2021",
      duration: "Concept and master planning",
      status: "Completed",
      keyConcept: ["African education"],
      features: [
        "Master plan",
        "Academic buildings",
        "Landscape design",
        "Infrastructure",
      ],
      team: "Architectural and CAD support",
      consultant: "HH Consulting Architects & Engineers",
      image: "/images/institute-of-africa-de-djoubti.jpg",
      hasImage: true,
      placeholder: "IMAGE COMING SOON",
    },
    {
      id: "potential-greenland",
      number: "03",
      title: "HOSPITALITY",
      project: "GREENLAND TOUR AND HOTEL",
      function: "Hotel Development",
      location: "Addis Ababa, Ethiopia",
      client: "Greenland Tour and Hotel PLC",
      value: "19,000,000 ETB",
      year: "2015",
      duration: "Opportunity presentation",
      status: "Completed",
      keyConcept: ["Tourism hospitality"],
      features: ["Guest rooms", "Restaurant", "Landscaping", "Amenities"],
      team: "Architectural and business development support",
      consultant: "HH Consulting Architects & Engineers",
      image: "/images/greenland and tour hotel.jpg",
      hasImage: true,
      placeholder: "IMAGE COMING SOON",
    },
    {
      id: "potential-hazal",
      number: "04",
      title: "REAL ESTATE",
      project: "HAZAL REAL ESTATE",
      function: "Property Development",
      location: "Addis Ababa, Ethiopia",
      client: "Hazal Real Estate",
      value: "19,000,000 ETB",
      year: "2017",
      duration: "Opportunity presentation",
      status: "Completed",
      keyConcept: ["Quality housing"],
      features: ["Residential units", "Landscaping", "Security", "Utilities"],
      team: "Architectural and business development support",
      consultant: "HH Consulting Architects & Engineers",
      image: "/images/hazal-real-estate.jpg",
      hasImage: true,
      placeholder: "IMAGE COMING SOON",
    },
  ],
};

export const allContentByCategory: Record<string, ContentItem[]> = {
  ...legacyContentByCategory,
  ...projectContentByCategory,
};
