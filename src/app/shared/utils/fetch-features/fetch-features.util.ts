import { Features } from "@/app/models/features/features.class";
import { environment } from "@/environments/environment";
import { fallbackFeatures } from "../../const/fallback-features.const";

export async function fetchFeatures(): Promise<Features> {
  try {
    const response = await fetch(environment.featuresUrl);
    const result = await response.text();
    const features = JSON.parse(result);

    return { ...fallbackFeatures, ...features };
  } catch (e) {
    return fallbackFeatures;
  }
}
