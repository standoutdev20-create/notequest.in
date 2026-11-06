import Onboarding from "@/components/onboarding/Onboarding";
import { requireUser } from "@/lib/api";
import { getSubjects } from "@/lib/learning";

export const metadata = { title: "Personalise your learning | NoteQuest" };

export default async function WelcomePage() {
  const user = await requireUser("/welcome");
  const subjects = await getSubjects();
  return <Onboarding user={user} subjects={subjects} />;
}
