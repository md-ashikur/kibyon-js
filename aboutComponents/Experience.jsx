import { Float, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Euler, Group, Vector3 } from "three";
import { usePlay } from "../../contexts/Play";
import { fadeOnBeforeCompile } from "../../utils/fadeMaterial";
import { Airplane } from "./Plane";
import { Background } from "./Background";
import { Cloud } from "./Cloud";
import { Speed } from "./Speed";
import { TextSection } from "./TextSection";
import { Avatar } from "./Leaned_avatar";


const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;
const FRICTION_DISTANCE = 42;

export const Experience = () => {
  const curvePoints = useMemo(
    () => [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-1, 0, -CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
    ],
    []
  );

  const sceneOpacity = useRef(0);
  const lineMaterialRef = useRef();

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  }, []);

  const textSections = useMemo(() => {
    return [
      {
        cameraRailDist: -2,
        position: new Vector3(
          curvePoints[1].x -3,
          curvePoints[1].y,
          curvePoints[1].z,
        ),
         rotation: new Euler(-Math.PI / 90, -Math.PI / 14, 0),
        title: `
Pourquoi auriez-vous 
besoin de conseil en 
stratégie d’entreprise ?`,
        subtitle: `
Chaque entreprise devrait régulièrement faire un point à 360° 
sur ses activités, sa situation passée et future. Il est primordial 
de prendre du temps pour revoir régulièrement votre stratégie 
globale à court moyen et long terme et identifier les axes 
d’améliorations. `,
      },
      
      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[1].x +11,
          curvePoints[1].y + 0.5,
          curvePoints[1].z - 40,
        ),
        rotation: new Euler(-Math.PI / 95, -Math.PI / 9, 0),
        title: ``,
        subtitle: `
        L’idée est de vous offrir des compétences spécifiques
        au service de vos idées, couplées à votre savoir-faire
        métier. Le but est d’apporter une vision complète pour
        identifier ensemble votre besoin pour des missions 
        ponctuelles ou un éclairage plus global pour un
        accompagnement régulier. `,
      },
      
      {
        cameraRailDist: 0.5,
        position: new Vector3(
          curvePoints[1].x + 46,
          curvePoints[1].y + 0.6,
          curvePoints[1].z -100,
        ),
        rotation: new Euler(-Math.PI / 99, -Math.PI / 5, -0.01),
        title: "",
        subtitle: `
       
           
        Il  est  souvent  difficile pour les  plus  petites  entreprises  
        d’avoir accès à ce type d’accompagnement, c’est pourquoi  
        nous mettons tout  en  œuvre  pour  proposer  du  conseil 
        abordable sur mesure, qui fait sens et qui place vos intérêts 
        en priorité. 
        
        `,
      },

      {
        cameraRailDist: 0.5,
        position: new Vector3(
          curvePoints[2].x - 25,
          curvePoints[2].y+ 1,
          curvePoints[2].z + 100,
        ),
        rotation: new Euler(-Math.PI / 95, -Math.PI / 7, -0.01),
        title: "",
        subtitle: `
       
        Que vous soyez à l’aise avec tout ce qui compose la vie 
        et la gestion d’une entreprise ou non, un regard extérieur 
        pour challenger votre quotidien et vous permettre de vous 
        poser les bonnes questions en vous aidant à y répondre est 
        capital. Pouvoir faire le point sur votre activité et appréhender 
        le futur afin de choisir les orientations à suivre en fonction de 
        vos besoins, objectifs et de la situation de votre entreprise.
        `,
      },
      {
        cameraRailDist: 1.7,
        position: new Vector3(
          curvePoints[2].x +2,
          curvePoints[2].y + 0.2,
          curvePoints[2].z+ 25,
        ),
        rotation: new Euler(-Math.PI / 95, Math.PI / 30, 0),
        title: `
Pourquoi choisir 
Kibyon ?`,
        subtitle: `
Notre cabinet, constitué d’une équipe jeune et 
créative a pour but de vous accompagner tout 
au long de votre parcours, selon vos envies, vos 
besoins et avec la plus grande pédagogie possible. 
Nous avons à cœur de proposer des services  
adaptés à votre situation personnelle et à celle de 
votre entreprise, tout au long de sa vie : de sa 
création à sa cession. 

        `,
      },
      {
        cameraRailDist: 1,
        position: new Vector3(
          curvePoints[2].x - 13,
          curvePoints[2].y +0.5,
          curvePoints[2].z - 30,
        ),
        rotation: new Euler(-Math.PI / 95, Math.PI / 5, 0.02),
        title: "",
        subtitle: `
Nous sommes animés par vos projets et la vie de votre  
entreprise, vous pouvez nous consulter n’importe quand, 
au-delà de l’aide à la création, nous  serons  présents en 
cas de difficultés (internes ou externes), d’interrogations 
et nous faisons aussi le lien entre  les  différents  acteurs 
avec qui vous serez amené à traiter pour s’assurer que vos 
intérêts soient toujours une priorité. 
        
        `,
      },
      {
        cameraRailDist: 0.5,
        position: new Vector3(
          curvePoints[3].x +153,
          curvePoints[3].y + 0.7,
          curvePoints[3].z +180,
        ),
        rotation: new Euler(-Math.PI / 95, Math.PI / 5, 0.01),
        title: "",
        subtitle: `
Nous avons décidé de faire du conseil autrement autant 
dans la méthode de conseil que dans la gestion du cabinet, 
en mettant la recherche académique et l’innovation au service 
du plus grand nombre, en proposant un conseil adaptable au 
plus près de ceux qui en ont besoin et en permettant une 
grande flexibilité dans nos offres mais aussi dans les 
possibilités de paiement.
        `,
      },
      {
        cameraRailDist: -1.9,
        position: new Vector3(
          curvePoints[3].x - 3,
          curvePoints[3].y,
          curvePoints[3].z
        ),
       
        title: `
Geoffrey THUILLIER – 
Fondateur  de  Kibyon `,
        subtitle: `Après avoir été au contact de diverses entreprises, entrepreneurs 
et institutions, j’ai observé que bon nombre d’acteurs se sentaient 
parfois démunis face aux difficultés et aux interrogations qu’ils 
pouvaient rencontrer. J’ai souhaité créer un cabinet qui répond aux 
préoccupations du plus grand nombre, en installant le monde du conseil 
dans le 21éme siècle pour le faire évoluer au rythme de la société et de 
ses nouveaux défis. Il me parait essentiels de tirer profit des nouvelles 
méthodes d’analyses, des avancées académiques et de proposer des 
solutions ultra-personnalisées, basées sur le besoin et non plus sur l’offre. `,
      },
     
      {
        cameraRailDist: 0.8,
        position: new Vector3(
          curvePoints[4].x - 1,
          curvePoints[4].y + 1,
          curvePoints[4].z 
        ),
        rotation: new Euler(-Math.PI / 95, -Math.PI / 25, -0.01),
        title: "",
        subtitle: `
        Pour parfaire nos analyses, nous devons aujourd’hui utiliser les 
        nouvelles technologies à notre disposition et ainsi proposer un 
        conseil plus performant, plus flexible et plus accessible en 
        privilégiant la pédagogie et la bienveillance. L’idée est de vous 
        accompagner tout au long de la vie de votre entreprise, tout en 
        vous rendant autonome, pour ne laisser aucune place au hasard 
        en prenant en compte tous les aspects de votre entreprise et de 
        son environnement. Ainsi, vous serez en mesure de vous adapter 
        et d’anticiper en permanence pour atteindre les objectifs que nous 
        nous sommes fixé ensemble et relever les challenges qui se présenteront.
        
        Merci pour votre soutien et la confiance que vous nous témoignez 
        au quotidien pour mener vos projets et vous accompagner. Nous 
        permettant ainsi de distiller notre vision et de faire évoluer ce secteur 
        au bénéfice des entrepreneurs et dirigeants d’entreprises.
        `,
      },
    ];
  }, []);
 

  const clouds = useMemo(
    () => [
      // STARTING
      {
        position: new Vector3(-3.5, -3.2, -7),
      },
      {
        position: new Vector3(3.5, -4, -10),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(-18, 0.2, -68),
        rotation: new Euler(-Math.PI / 5, Math.PI / 6, 0),
      },
      {
        scale: new Vector3(2.5, 2.5, 2.5),
        position: new Vector3(10, -1.2, -52),
      },
      // FIRST POINT
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[1].x + 10,
          curvePoints[1].y - 4,
          curvePoints[1].z + 64
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[1].x - 20,
          curvePoints[1].y + 4,
          curvePoints[1].z + 28
        ),
        rotation: new Euler(0, Math.PI / 7, 0),
      },
      {
        rotation: new Euler(0, Math.PI / 7, Math.PI / 5),
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x - 13,
          curvePoints[1].y + 4,
          curvePoints[1].z - 62
        ),
      },
      {
        rotation: new Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x + 54,
          curvePoints[1].y + 2,
          curvePoints[1].z - 82
        ),
      },
      {
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x + 8,
          curvePoints[1].y - 14,
          curvePoints[1].z - 22
        ),
      },
      // SECOND POINT
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[2].x + 6,
          curvePoints[2].y - 7,
          curvePoints[2].z + 50
        ),
      },
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[2].x - 2,
          curvePoints[2].y + 4,
          curvePoints[2].z - 26
        ),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[2].x + 12,
          curvePoints[2].y + 1,
          curvePoints[2].z - 86
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 3),
      },
      // THIRD POINT
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[3].x + 3,
          curvePoints[3].y - 10,
          curvePoints[3].z + 50
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[3].x - 10,
          curvePoints[3].y,
          curvePoints[3].z + 30
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[3].x - 20,
          curvePoints[3].y - 5,
          curvePoints[3].z - 8
        ),
        rotation: new Euler(Math.PI, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[3].x + 0,
          curvePoints[3].y - 5,
          curvePoints[3].z - 98
        ),
        rotation: new Euler(0, Math.PI / 3, 0),
      },
      // FOURTH POINT
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[4].x + 3,
          curvePoints[4].y - 10,
          curvePoints[4].z + 2
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[4].x + 24,
          curvePoints[4].y - 6,
          curvePoints[4].z - 42
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[4].x - 4,
          curvePoints[4].y + 9,
          curvePoints[4].z - 62
        ),
        rotation: new Euler(Math.PI / 3, 0, Math.PI / 3),
      },
      // FINAL
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[7].x + 12,
          curvePoints[7].y - 5,
          curvePoints[7].z + 60
        ),
        rotation: new Euler(-Math.PI / 4, -Math.PI / 6, 0),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[7].x - 12,
          curvePoints[7].y + 5,
          curvePoints[7].z + 120
        ),
        rotation: new Euler(Math.PI / 4, Math.PI / 6, 0),
      },
    ],
    []
  );

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const cameraRail = useRef();
  const camera = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  const { play, setHasScroll, end, setEnd } = usePlay();

  useFrame((_state, delta) => {
    if (window.innerWidth > window.innerHeight) {
      // LANDSCAPE
      camera.current.fov = 30;
      camera.current.position.z = 5;
    } else {
      // PORTRAIT
      camera.current.fov = 80;
      camera.current.position.z = 2;
    }

    if (lastScroll.current <= 0 && scroll.offset > 0) {
      setHasScroll(true);
    }

    if (play && !end && sceneOpacity.current < 1) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 0.1
      );
    }

    if (end && sceneOpacity.current > 0) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        0,
        delta
      );
    }

    lineMaterialRef.current.opacity = sceneOpacity.current;

    if (end) {
      return;
    }

    const scrollOffset = Math.max(0, scroll.offset);

    let friction = 1;
    let resetCameraRail = true;
    // LOOK TO CLOSE TEXT SECTIONS
    textSections.forEach((textSection) => {
      const distance = textSection.position.distanceTo(
        cameraGroup.current.position
      );

      if (distance < FRICTION_DISTANCE) {
        friction = Math.max(distance / FRICTION_DISTANCE, 0.1);
        const targetCameraRailPosition = new Vector3(
          (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist,
          0,
          0
        );
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        resetCameraRail = false;
      }
    });
    if (resetCameraRail) {
      const targetCameraRailPosition = new Vector3(0, 0, 0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    }

    // CALCULATE LERPED SCROLL OFFSET
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction
    );
    // PROTECT BELOW 0 AND ABOVE 1
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;
    tl.current.seek(lerpedScrollOffset * tl.current.duration());

    const curPoint = curve.getPoint(lerpedScrollOffset);

    // Follow the curve points
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // Make the group look ahead on the curve

    const lookAtPoint = curve.getPoint(
      Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    // Airplane rotation

    const tangent = curve.getTangent(lerpedScrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle

    // LIMIT PLANE ANGLE
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    // SET BACK ANGLE
    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle
      )
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);

    if (
      cameraGroup.current.position.z <
      curvePoints[curvePoints.length - 1].z + 100
    ) {
      setEnd(true);
      planeOutTl.current.play();
    }
  });

  const airplane = useRef();

  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#3535cc",
    colorB: "#abaadd",
  });

  const planeInTl = useRef();
  const planeOutTl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#6f35cc",
      colorB: "#f5bccf",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#6f35cc",
      colorB: "#f5bccf",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#6f35cc",
      colorB: "#f5bccf",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#3535cc",
    colorB: "#abaadd",
    });

    tl.current.pause();

    planeInTl.current = gsap.timeline();
    planeInTl.current.pause();
    planeInTl.current.from(airplane.current.position, {
      duration: 3,
      z: 5,
      y: -2,
    });

    planeOutTl.current = gsap.timeline();
    planeOutTl.current.pause();

    planeOutTl.current.to(
      airplane.current.position,
      {
        duration: 10,
        z: -250,
        y: 10,
      },
      0
    );
    planeOutTl.current.to(
      cameraRail.current.position,
      {
        duration: 8,
        y: 12,
      },
      0
    );
    planeOutTl.current.to(airplane.current.position, {
      duration: 1,
      z: -1000,
    });
  }, []);

  useEffect(() => {
    if (play) {
      planeInTl.current.play();
    }
  }, [play]);

  return useMemo(
    () => (
      <>
        <directionalLight position={[0, 3, 1]} intensity={0.1} />
        <group ref={cameraGroup}>
          <Speed />
          <Background backgroundColors={backgroundColors} />
          <group ref={cameraRail}>
            <PerspectiveCamera
              ref={camera}
              position={[0, 0, 5]}
              fov={30}
              makeDefault
            />
          </group>
          <group ref={airplane}>
            <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
              <Airplane
                rotation-y={Math.PI / 2}
                scale={[0.25, 0.25, 0.25]}
                position-y={0.02}
              />
            </Float>
          </group>

         
        </group>
        {/* TEXT */}
        {textSections.map((textSection, index) => (
          <TextSection {...textSection} key={index} />
        ))}

        {/* LINE */}
        <group position-y={-2}>
          <mesh>
            <extrudeGeometry
              args={[
                shape,
                {
                  steps: LINE_NB_POINTS,
                  bevelEnabled: false,
                  extrudePath: curve,
                },
              ]}
            />
            <meshStandardMaterial
              color={"white"}
              ref={lineMaterialRef}
              transparent
              envMapIntensity={2}
              onBeforeCompile={fadeOnBeforeCompile}
            />
          </mesh>
        </group>

        {/* avatar */}
        <group position-z={-750} position-x={-103.3} position-y={-1}>
          <mesh>
            
             <Avatar/>
            
          </mesh>
        </group>

        {/* CLOUDS */}
        {clouds.map((cloud, index) => (
          <Cloud sceneOpacity={sceneOpacity} {...cloud} key={index} />
        ))}
        
      </>
    ),
    []
  );
};