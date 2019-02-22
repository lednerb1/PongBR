class Renderer {
    constructor(){
        this.coordinates = this.GenerateBoundaries();
    }

    Boundaries(){
        for(let i=0; i<this.coordinates.length; i++){
            fill(255, 150);
            push();
            translate(this.coordinates[i].x, this.coordinates[i].y);
            rotate(this.coordinates[i].dir);
            rect(0, 0, 20, 10);
            pop();
        }
    }

    GenerateBoundaries(){
        
        let radius = 250.0;
        let angle = 90 * Math.PI / 180.0;
        let coordinates = [];
        let players = 10;
        for(let i=0; i<players; i++){
            let x = radius * Math.cos(angle);
            let y = radius * Math.sin(angle);
            let dir = angle - Math.PI / 2;
            coordinates.push({x,y,dir});
            angle += Math.PI*2 / players;
        }

        return coordinates;
    }
}