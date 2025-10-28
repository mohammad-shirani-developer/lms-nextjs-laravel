import { Notification } from "@/types/notification.interface";
import { generateID } from "@/utils/string";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type NotificationState = {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationState>()(
  devtools((set, get) => ({
    notifications: [],
    addNotification: (notification) => {
      const id = generateID();
      set((state) => ({
        notifications: [...state.notifications, { id: id, ...notification }],
      }));

      setTimeout(() => {
        get().removeNotification(id);
      }, 5000);
    },
    removeNotification: (id) => {
      set((state) => ({
        notifications: state.notifications.filter((p) => p.id !== id),
      }));
    },
  }))
);

export const addNotification = (notifications: Omit<Notification, "id">[]) => {
  notifications.forEach((n) =>
    useNotificationStore.getState().addNotification(n)
  );
};
