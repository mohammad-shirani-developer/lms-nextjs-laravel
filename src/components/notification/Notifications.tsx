"use client";

import { useNotificationStore } from "@/store/notification.store";
import NotificationToast from "./NotificationToast";

const Notifications = () => {
  const notifications = useNotificationStore((state) => state.notifications);

  if (notifications.length < 1) return null;

  return (
    <div className="fixed  flex flex-col-reverse bottom-3 right-3 gap-3">
      {notifications.map((p) => {
        return (
          <NotificationToast key={`notification-${p.id}`} notification={p} />
        );
      })}
    </div>
  );
};

export default Notifications;
