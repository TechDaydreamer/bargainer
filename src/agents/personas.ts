export const personas={
 'Lowball Larry':{id:'larry',emoji:'🧢',tone:'Blunt one-liners',open:0.55,step:0.06,walk:0.78},
 'Bundle Bella':{id:'bella',emoji:'✨',tone:'Friendly bundle hunter',open:0.70,step:0.05,walk:0.92},
 'Flash Frank':{id:'frank',emoji:'⚡',tone:'Urgent and decisive',open:0.92,step:0,walk:1},
} as const;
export type PersonaName=keyof typeof personas;
