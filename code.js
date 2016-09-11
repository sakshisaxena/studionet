

$(function(){ // on dom ready


var cy = cytoscape({
  container: document.getElementById('cy'),
  layout: {
    name: 'cose',
    padding: 10,
    randomize: true
  },
    hideLabelsOnViewport: false,
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'shape': 'data(faveShape)',
        'width': 'mapData(weight, 40, 80, 20, 60)',
        //'content': 'data(name)',
        'text-valign': 'center',
        'font-size':'5%',
        'text-outline-width': 2,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
    .selector(':selected')
      .css({
        'border-width': 2,
        
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        //'opacity': 0.666,
        'width': 'mapData(strength, 70, 100, 2, 5)',
        'target-arrow-shape': 'triangle',
        //'source-arrow-shape': 'circle',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'content' : 'data(label)',
        'font-size':'5%',
        'edge-text-rotation': 'autorotate',
        'target-arrow-color': 'data(faveColor)'
      })
    /*.selector('edge.questionable')
      .css({
        'line-style': 'dotted',
        'target-arrow-shape': 'diamond'
      }) */
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),
  
  elements: {
    nodes: [
      { data: { id: 'm', name: 'AR2521', weight: 6, faveColor: '#6FB1FC', faveShape: 'rectangle', type:'module' } },
      { data: { id: 'mod', name: 'Moderator', weight: 6, faveColor: '#6FB1FC', faveShape: 'ellipse', type:'moderator' } },
      { data: { id: 'ass1', name: 'Assignment1', weight: 6, faveColor: '#6FB1FC', faveShape: 'triangle', type:'material' } },
      { data: { id: 'res', name: 'study1', weight: 6, faveColor: '#6FB1FC', faveShape: 'triangle', type:'material' } },
      { data: { id: 'e', name: 'Elaine', weight: 6, faveColor: '#6FB1FC', faveShape: 'ellipse', type:'student' } },
      { data: { id: 'k', name: 'Kramer', weight: 2, faveColor: '#6FB1FC', faveShape: 'ellipse', type:'student' } },
      { data: { id: 'g', name: 'George', weight: 6, faveColor: '#6FB1FC', faveShape: 'ellipse', type:'student' } },
      { data: { id: 's', name: 'Sakshi', weight: 6, faveColor: '#6FB1FC', faveShape: 'ellipse', type:'student' } },
      { data: { id: 'cE1', name: 'Elaine_C1', weight: 6, faveColor: '#6FB1FC', faveShape: 'ellipse', type:'contribution' } },
      { data: { id: 'qK1', name: 'Kramer_Q1', weight: 6, faveColor: '#6FB1FC', faveShape: 'ellipse', type:'contribution' } },
      { data: { id: 'cS1', name: 'Sakshi_C1', weight: 6, faveColor: '#6FB1FC', faveShape: 'ellipse', type:'contribution' } },
      { data: { id: 's1', name: 'sol1', weight: 6, faveColor: '#6FB1FC', faveShape: 'ellipse', type:'submission' } }
      
    ],
    edges: [
      { data: { source: 'm', target: 'res', faveColor: '#6FB1FC', strength: 6, label: 'resource' } },
      { data: { source: 'm', target: 'mod', faveColor: '#6FB1FC', strength: 6, label: 'moderated_by' } },
      { data: { source: 'm', target: 'ass1', faveColor: '#6FB1FC', strength: 6, label:'assignment' } },
      { data: { source: 'ass1', target: 'mod', faveColor: '#6FB1FC', strength: 6, label:'created_by' } },
      { data: { source: 'cE1', target: 'e', faveColor: '#6FB1FC', strength: 6, label:'created_by' } },
      { data: { source: 'e', target: 'g', faveColor: '#6FB1FC', strength: 6,  label: 'follows' } },
     
      { data: { source: 'e', target: 'm', faveColor: '#6FB1FC', strength: 6, label: 'student_of' } },
      
      
      { data: { source: 'k', target: 'm', faveColor: '#6FB1FC', strength: 6, label: 'student_of' } },
           
      { data: { source: 'g', target: 'm', faveColor: '#6FB1FC', strength: 6, label: 'student_of' } },
      { data: { source: 's1', target: 'e', faveColor: '#6FB1FC', strength: 6, label: 'submitted_by' } },
      { data: { source: 's1', target: 'ass1', faveColor: '#6FB1FC', strength: 6, label: 'submitted_for' } },
      { data: { source: 'qK1', target: 'k', faveColor: '#6FB1FC', strength: 6, label: 'question_by' } },
      { data: { source: 'qK1', target: 'cE1', faveColor: '#6FB1FC', strength: 6, label: 'answered_with' } },
      { data: { source: 'cS1', target: 's', faveColor: '#6FB1FC', strength: 6, label: 'comment_by' } },
      { data: { source: 'cS1', target: 'cE1', faveColor: '#6FB1FC', strength: 6, label: 'comment_for' } }
    ]
  },
  

  ready: function(){
    window.cy = this;
    
    // giddy up
  }
});

cy.on('mouseover','node', function(evt){
  var name = evt.cyTarget.data('name');
  console.log( 'tap '+name   );
  
  evt.cyTarget.css({ content: name});
});


}); // on dom ready