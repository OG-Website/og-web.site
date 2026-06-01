import {
  Globe,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIconId } from "./site-data";

export const serviceIcons: Record<ServiceIconId, LucideIcon> = {
  design: Globe,
  build: MonitorSmartphone,
  launch: Server,
  support: ShieldCheck,
};
