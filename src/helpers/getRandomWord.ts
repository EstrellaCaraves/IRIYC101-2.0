let words = [
    { word: 'SEGMENTACIONDERED', hint: 'División de una red' },
    { word: 'FIREWALL', hint: 'Filtra tráfico de red' },
    { word: 'VLAN', hint: 'Red local virtual' },
    { word: 'DMZ', hint: 'Zona entre redes seguras' },
    { word: 'NAT', hint: 'Traduce direcciones IP' },
    { word: 'IPSEC', hint: 'Protege datos en red' },
    { word: 'IDS', hint: 'Detecta intrusiones' },
    { word: 'PENTESTING', hint: 'Pruebas de seguridad' },
    { word: 'SPOOFING', hint: 'Suplantación de identidad' },
    { word: 'SIEM', hint: 'Gestiona eventos de seguridad' },
    { word: 'TOKENIZACION', hint: 'Protege datos con tokens' },
    { word: 'SDN', hint: 'Redes controladas por software' },
    { word: 'QOS', hint: 'Calidad en servicio de red' },
    { word: 'VPN', hint: 'Red privada segura' },
    { word: 'ZEROTRUST', hint: 'Modelo sin confianza' },
    { word: 'VIRTUALIZACION', hint: 'Crea entornos virtuales' },
    { word: 'ORQUESTACION', hint: 'Coordina tareas y servicios' },
    { word: 'SCRIPTING', hint: 'Automatiza tareas' },
    { word: 'DEPLOY', hint: 'Despliegue de software' },
    { word: 'CONTENEDORES', hint: 'Aisla aplicaciones' },
    { word: 'MONITOREO', hint: 'Supervisión de sistemas' },
    { word: 'JENKINS', hint: 'Herramienta CI/CD' },
    { word: 'INTEGRACION', hint: 'Unión de componentes' },
    { word: 'ANSIBLE', hint: 'Automatiza configuraciones' },
    { word: 'SUPERVISION', hint: 'Observación de sistemas' },
    { word: 'ESCALABILIDAD', hint: 'Capacidad de crecer' },
    { word: 'CODIGO', hint: 'Instrucciones de un programa' },
    { word: 'RENDIMIENTO', hint: 'Eficiencia del sistema' },
    { word: 'REDUNDANCIA', hint: 'Duplicación para seguridad' },
    { word: 'INFRAESTRUCTURA', hint: 'Base de recursos TI' },
    { word: 'PRUEBAS', hint: 'Verificación de calidad' },
    { word: 'IMPLEMENTACION', hint: 'Puesta en producción' },
    { word: 'AUTOMATIZACION', hint: 'Tareas automáticas' },
    { word: 'CONFIGURACION', hint: 'Ajuste de parámetros' },
];


export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}