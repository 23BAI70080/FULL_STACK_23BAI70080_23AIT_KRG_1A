document.addEventListener('DOMContentLoaded', () => {

    const svg = document.getElementById('canvas');
    const undoBtn = document.getElementById('undo-btn');
    
    let drawings = [];
    let isDrawing = false;
    let currentLine = null;

    // --- MOUSE DOWN (No changes here) ---
    svg.addEventListener('mousedown', (event) => {
        isDrawing = true;
        const points = `${event.offsetX},${event.offsetY}`;

        currentLine = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        currentLine.setAttribute('points', points);
        currentLine.setAttribute('stroke', '#2c3e50');
        currentLine.setAttribute('stroke-width', '4');
        currentLine.setAttribute('fill', 'none');
        
        svg.appendChild(currentLine);
    });

    // --- MOUSE MOVE (No changes here) ---
    svg.addEventListener('mousemove', (event) => {
        if (!isDrawing) return;
        const currentPoints = currentLine.getAttribute('points');
        const newPoints = `${currentPoints} ${event.offsetX},${event.offsetY}`;
        currentLine.setAttribute('points', newPoints);
    });

    // --- MOUSE UP (CHANGE IS HERE) ---
    // We listen on the whole window now, not just the SVG
    window.addEventListener('mouseup', () => {
        if (!isDrawing) return;
        isDrawing = false;
        
        drawings.push(currentLine);
        currentLine = null;
    });
    
    // --- (BONUS) MOUSE LEAVE (Good practice to add this) ---
    // This stops drawing if your mouse leaves the canvas area
    svg.addEventListener('mouseleave', () => {
        if (!isDrawing) return;
        isDrawing = false;
        
        drawings.push(currentLine);
        currentLine = null;
    });

    // --- UNDO LOGIC (No changes needed) ---
    function undo() {
        const lastDrawing = drawings.pop();
        if (lastDrawing) {
            svg.removeChild(lastDrawing);
        }
    }
    
    undoBtn.addEventListener('click', undo);
});