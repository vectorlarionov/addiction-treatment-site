
export interface HeroStat {
  number: number;
  label: string;
  color: string;
}

export interface FeatureDetails {
  overview: string;
  keyPoints: string[];
  stages?: Stage[];
  blocks?: Block[];
  interpretation?: Interpretation[];
  categories?: {
    internal?: TriggerCategory;
    external?: TriggerCategory;
  };
}

export interface Stage {
  id: number;
  title: string;
  description: string;
}

export interface Block {
  id: string;
  title: string;
  description: string;
}

export interface Interpretation {
  range: string;
  level: string;
  description: string;
  color: string;
}

export interface TriggerCategory {
  title: string;
  subtitle: string;
  items: {
    emotions?: string[];
    thoughts?: string[];
    physical?: string[];
    places?: string[];
    people?: string[];
    situations?: string[];
  };
}

export interface MainFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  details: FeatureDetails;
}

export interface Intervention {
  name: string;
  description: string;
}

export interface InterventionCategory {
  category: string;
  interventions: Intervention[];
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  stats: HeroStat[];
}
