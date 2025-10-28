"use client";

import { useNotificationStore } from "@/store/notification.store";
import { NotificationType } from "@/types/notification.interface";
import { ReactNode, useEffect, useState } from "react";
import { IconCheck, IconClose, IconInfo, IconNot } from "../icons/icons";
import { Progress } from "../progress";
import { NotificationToastProps } from "./notification.types";

// Notification Types
const notificationTypes: Record<NotificationType, string> = {
  success: "bg-success",
  info: "bg-info",
  warning: "bg-warning",
  error: "bg-error",
};

// Notification Icons
const notificationIcons: Record<NotificationType, ReactNode> = {
  success: <IconCheck width={20} height={20} color="white" />,
  info: <IconInfo width={20} height={20} color="white" />,
  warning: <IconInfo width={20} height={20} color="white" />,
  error: <IconNot width={20} height={20} color="white" />,
};

// Render Component
const NotificationToast = ({
  notification: { id, message, type, duration = 5000 },
}: NotificationToastProps) => {
  const removeNotification = useNotificationStore(
    (state) => state.removeNotification
  );

  // Progress value
  const [progressValue, setProgressValue] = useState<number>(100);

  // Update progress value
  //     useEffect(() => {
  //     const timeoutId = setTimeout(() => dismissNotification(id), duration);
  //     return () => clearTimeout(timeoutId);
  //   }, [id, duration, dismissNotification]);
  useEffect(() => {
    const interval = duration / 100;
    const intervalId = setInterval(() => {
      setProgressValue((oldValue) =>
        Math.max(oldValue - 100 / (duration / interval), 0)
      );
    }, interval);
    return () => clearInterval(intervalId);
  }, [duration]);

  // Render Component
  return (
    <div className="notification show-notification">
      <div className={`notification-icon ${notificationTypes[type]}`}>
        {notificationIcons[type]}
      </div>
      <div className="text-sm font-semibold">{message}</div>
      <button
        className="mr-auto hover:text-white mt-2"
        onClick={() => removeNotification(id)}
      >
        <IconClose width={20} height={20} />
      </button>
      <Progress
        className="!absolute bottom-1 left-2 right-2 !w-auto"
        size="xs"
        variant={type}
        value={progressValue}
      />
    </div>
  );
};

export default NotificationToast;
