import React, { Component } from 'react';
import '../../App.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Lesson extends Component {

    constructor() {
        super() 
        this.state = {
            lists:  [
                {
                    'id': 1,
                    'lesson': 'Lesson 1'
                },
                {
                    'id': 2,
                    'lesson': 'Lesson 2'
                },
                {
                    'id': 3,
                    'lesson': 'Lesson 3'
                },
                {
                    'id': 4,
                    'lesson': 'Lesson 4'
                },
                {
                    'id': 5,
                    'lesson': 'Lesson 5'
                },
                {
                    'id': 6,
                    'lesson': 'Lesson 6'
                },
                {
                    'id': 7,
                    'lesson': 'Lesson 7'
                },
                {
                    'id': 8,
                    'lesson': 'Lesson 8'
                },
                {
                    'id': 9,
                    'lesson': 'Lesson 9'
                },
                {
                    'id': 10,
                    'lesson': 'Lesson 10'
                }
            ],
            count: 1,
            newList: [],
            flag: true,
          
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
       
    }

    previous() {
        const { newList, lists,count } = this.state

        console.log('countValue*******', count)
        console.log('lists********************', lists)
     
    
    }

    next() {
        const { count, lists, newList, flag, prevIndex } = this.state;

        {flag && lists.map( e => {
            if(count === e.id) {
                this.setState({
                    newList: [...newList, e.lesson],
                    count: count + 1
                })
            }
        })}

        if(count === 1) {
            this.setState({
                count: 2
            })
            return
        }
        if(flag === true) {
            this.setState({
                flag: false
            })
        } else {
            this.setState({
                flag: true
            })
        }
       
    }

  

  render() {
      const { lists, count, newList, flag } = this.state;

      const list = lists.map( e => {
            if(e.id === count) {
                return (
                        <Card className='card'>
                            <CardContent>
                            <Typography className='title' color="textSecondary" gutterBottom>
                                    Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                    olivier-french-learn
                            </Typography>
                            <Typography className='pos' color="textSecondary">
                                     adjective
                            </Typography>
                            <Typography >
                                     <h2 key={e.id} className='lesson'>{e.lesson}</h2>
                            </Typography>
                            <CardActions>
                                 <Button size="small">Learn More</Button>
                            </CardActions>
                                   
                            </CardContent>
                        </Card>
                )
            }
      })   
      // add item newlist from lists 
      const myList = newList.map((e, index) => {
          return (
                    <Card className='card'>
                        <CardContent>
                                <Typography className='title' color="textSecondary" gutterBottom>
                                        Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                        olivier-french-learn
                                </Typography>
                                <Typography className='pos' color="textSecondary">
                                        adjective
                                </Typography>
                                <Typography >
                                        <h2 key={e.index}  className='card'><span className="container">{e}</span></h2>    
                                </Typography>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                                    
                         </CardContent>
                             
                    </Card>
                  
            )
      })
      
    
    return (
      <div className='div1'>
          
          {flag ? list : myList}
          

          <br /><br />
          <div>
              <button className='button' onClick={this.next}><span>Next</span></button>
          </div>
     
      </div>
    );
  }
}

export default Lesson;
