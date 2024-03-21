import { environment } from "@env/environment";
import { FeaturesInterface } from "@/models/features/features.interface";
import { fallbackFeatures } from "../../const/fallback-features.const";

export async function fetchFeatures(): Promise<FeaturesInterface> {
  if (Object.getOwnPropertyNames(fallbackFeatures).length === 0) {
    return Promise.resolve(fallbackFeatures);
  }

  try {
    const response = await fetch(environment.featuresUrl);
    const result = await response.text();
    const features = JSON.parse(result);

    return Object.freeze({ ...fallbackFeatures, ...features });
  } catch (e) {
    return Object.freeze(fallbackFeatures);
  }
}
