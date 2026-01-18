import { createElement } from "preact";
import {
  DartSvg,
  DenoSvg,
  DockerSvg,
  ExpressSvg,
  FlutterSvg,
  FreshSvg,
  GoSvg,
  HonoSvg,
  JavascriptSvg,
  LinuxSvg,
  MongoDBSvg,
  NextSvg,
  NodeSvg,
  ReactSvg,
  TailwindSvg,
  TypescriptSvg,
  UbuntuSvg,
} from "../../components/svg/Programming.tsx";

export const knownTechList: {
  icon: () => createElement.JSX.Element;
  name: string;
}[] = [
  { icon: JavascriptSvg, name: "JavaScript" },
  { icon: TypescriptSvg, name: "TypeScript" },
  { icon: ReactSvg, name: "React" },
  { icon: NodeSvg, name: "Node" },
  { icon: DenoSvg, name: "Deno" },
  { icon: ExpressSvg, name: "Express" },
  { icon: HonoSvg, name: "Hono" },
  { icon: NextSvg, name: "Next" },
  { icon: FreshSvg, name: "Fresh" },
  { icon: DartSvg, name: "Dart" },
  { icon: FlutterSvg, name: "Flutter" },
  { icon: LinuxSvg, name: "Linux" },
  { icon: UbuntuSvg, name: "Ubuntu" },
  { icon: DockerSvg, name: "Docker" },
  { icon: TailwindSvg, name: "Tailwind" },
  { icon: GoSvg, name: "GoLang" },
  { icon: MongoDBSvg, name: "MongoDB" },
];
