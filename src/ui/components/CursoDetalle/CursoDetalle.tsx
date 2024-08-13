import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './CursoDetalle.module.scss';
import { formatText } from '../../../utils/formatText';

interface Modulo {
  id: number;
  titulo: string;
  contenido: string;
  submodulos?: string[];
}

interface CursoData {
  titulo: string;
  modulos: Modulo[];
}

interface CursoDetalleProps {
  cursoData: CursoData;
}

const useReadingProgress = (contenedorRef: React.RefObject<HTMLDivElement>, moduloActivo: number) => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      if (contenedorRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contenedorRef.current;
        const scrollableHeight = scrollHeight - clientHeight;
        const currentCompletion = (scrollTop / scrollableHeight) * 100;

        if (currentCompletion > completion) {
          setCompletion(currentCompletion);
        }
      }
    };

    if (contenedorRef.current) {
      contenedorRef.current.addEventListener('scroll', updateScrollCompletion);
      updateScrollCompletion(); // Inicializar
    }

    return () => {
      if (contenedorRef.current) {
        contenedorRef.current.removeEventListener('scroll', updateScrollCompletion);
      }
    };
  }, [contenedorRef, moduloActivo, completion]);

  useEffect(() => {
    setCompletion(0); // Resetear el progreso al cambiar de módulo
  }, [moduloActivo]);

  return completion;
};

const CursoDetalle: React.FC<CursoDetalleProps> = ({ cursoData }) => {
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [moduloActivo, setModuloActivo] = useState(0);
  const [modulos, setModulos] = useState<(Modulo & { progreso: number })[]>([]);
  const contenedorRef = useRef<HTMLDivElement>(null);
  const readingProgress = useReadingProgress(contenedorRef, moduloActivo);

  useEffect(() => {
    setModulos(cursoData.modulos.map((modulo) => ({ ...modulo, progreso: 0 })));
  }, [cursoData]);

  useEffect(() => {
    setModulos((prevModulos) => {
      const newModulos = [...prevModulos];
      newModulos[moduloActivo] = {
        ...newModulos[moduloActivo],
        progreso: Math.round(readingProgress)
      };
      return newModulos;
    });
  }, [readingProgress, moduloActivo]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    setSidebarWidth(e.clientX);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const calcularProgresoTotal = () => {
    const totalModulos = modulos.length;
    const progresoTotal = modulos.reduce((sum, modulo) => sum + modulo.progreso, 0);
    return totalModulos > 0 ? progresoTotal / totalModulos : 0;
  };

  const avanzarModulo = () => {
    if (moduloActivo < modulos.length - 1) {
      setModuloActivo(moduloActivo + 1);
      contenedorRef.current?.scrollTo(0, 0); // Volver al inicio del nuevo módulo
    }
  };

  return (
    <div className={styles.cursoDetalle}>
      <div
        className={`${styles.sidebar} ${!isSidebarVisible ? styles.closed : ''}`}
        style={{ width: isSidebarVisible ? `${sidebarWidth}px` : '0px' }}
      >
        <div className={styles.resizeHandle} onMouseDown={handleMouseDown}></div>
        <h2>{cursoData.titulo}</h2>
        <div className={styles.capitulosContainer}>
          <ul>
            {modulos.map((modulo, index) => (
              <li
                key={modulo.id}
                className={moduloActivo === index ? styles.active : ''}
                onClick={() => setModuloActivo(index)}
              >
                <div className={styles.moduloTitulo}>{modulo.titulo}</div>
                <div className={styles.moduloProgreso}>
                  <CircularProgressbar
                    value={modulo.progreso}
                    text={`${Math.round(modulo.progreso)}%`}
                    styles={{
                      root: { width: '30px', height: '30px' },
                      text: { fontSize: '30px', fill: '#7c54f7' },
                      path: { stroke: '#7c54f7' },
                      trail: { stroke: '#d6d6d6' }
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className={styles.toggleSidebar}
        onClick={toggleSidebar}
        style={{ left: isSidebarVisible ? `${sidebarWidth}px` : '0px' }}
      >
        {isSidebarVisible ? '<' : '>'}
      </button>

      <div className={styles.contenido} ref={contenedorRef}>
        <div className={styles.contenidoCentrado}>
          {modulos.map((modulo, index) => (
            <div key={modulo.id} className={`${styles.modulo} ${index === moduloActivo ? styles.visible : ''}`}>
              <h2>{modulo.titulo}</h2>
              <div className={styles.moduloContenido}>{formatText(modulo.contenido)}</div>
              {Math.round(readingProgress) === 100 && (
                <button onClick={avanzarModulo} className={styles.siguienteModulo}>
                  <p>↓ Siguiente módulo ↓</p>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CursoDetalle;
