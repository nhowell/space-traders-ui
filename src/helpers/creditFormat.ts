import { pluralize } from "./pluralize";
import { t } from "./translate";

export function creditFormat(credits: number) {
	return pluralize(Math.round(credits), t("Credit"), t("Credits"));
}
