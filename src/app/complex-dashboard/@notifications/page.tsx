import Card from "@/components/card";
import Link from "next/link";

export default function NotificationPage() {
  return (
    <Card>
      <div>Default Notifications</div>
      <Link href="/complex-dashboard/archived">Archived Notifications</Link>
    </Card>
  );
}
