import { FeaturesInterface } from "@/app/models/features/features.interface";
import { environment } from "@/environments/environment";
import { fallbackFeatures } from "../../const/fallback-features.const";

export async function fetchFeatures(): Promise<FeaturesInterface> {
  try {
    const response = await fetch(environment.featuresUrl);
    const result = await response.text();
    const features = JSON.parse(result);

    return Object.freeze({ ...fallbackFeatures, ...features });
  } catch (e) {
    return Object.freeze(fallbackFeatures);
  }
}
