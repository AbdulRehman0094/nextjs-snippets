import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotificationPage() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard">Default Notifications</Link>
    </Card>
  );
}
