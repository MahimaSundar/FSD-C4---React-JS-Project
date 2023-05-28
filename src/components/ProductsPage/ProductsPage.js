import { Typography,Grid, Button} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ProductsPage(props){
return (
<Grid container direction="column">

    <Grid container direction = "row" style={{textAlign:"center",paddingTop:"30px"}}>
      <Card style={{width:"300px",alignContent:"center",paddingRight:"50px"}}>
      <img src="https://media.gettyimages.com/id/171224469/photo/canvas-shoes.jpg?s=612x612&w=gi&k=20&c=m8fPMzFutcPz6R6cg5f7lC7T4m-v8RgCmi_FfPhFOzg=" alt="Shoe image" width="300px" height="300px"/>
       <span style={{float:"left",marginLeft:"5px",fontWeight:"bold"}}>Canvas Shoes</span>
        <span style={{float:"right",marginRight:"5px",fontWeight:"bold"}}>Rs.2000</span>
        <Grid container>
        <Typography variant="body" align="justify" style={{marginLeft:"5px",marginRight:"5px"}}>The canvas shoe is a very basic form of casual shoe or sneaker. It is constructed very simply with a canvas upper and a rubber sole. </Typography>
        </Grid>
        <Grid container style={{paddingTop:"10px",paddingBottom:"10px",marginLeft:"5px"}}>
            <Button variant="contained" color="primary" size="small">
                    Buy
                  </Button>
                 {props.admin && <EditIcon style={{paddingLeft:"180px",paddingRight:"5px"}}/>}
                                                                                                     {props.admin && <DeleteIcon />}
        </Grid>
      </Card>
      <Card style={{width:"300px",alignContent:"center",paddingRight:"50px"}}>
            <img src="https://media.gettyimages.com/id/172380146/photo/gold-watch.jpg?s=612x612&w=gi&k=20&c=vi9txrypJnjsLzT9gTsZex6P3ubs4Oaa1EfXJnL8T4c=" alt="Shoe image" width="300px" height="300px"/>
             <span style={{float:"left",marginLeft:"5px",fontWeight:"bold"}}>Watches</span>
              <span style={{float:"right",marginRight:"5px",fontWeight:"bold"}}>Rs.1500</span>
              <Grid container style={{minHeight:"30px"}}>
              <Typography variant="body" align="justify" style={{marginLeft:"5px",marginRight:"5px"}}>Choose from latest collection of Watches Online. Buy Wrist Watches at best price from top brands. Offer price limited for 3 days only</Typography>
              </Grid>
              <Grid container style={{paddingTop:"10px",paddingBottom:"10px",marginLeft:"5px"}}>
                  <Button variant="contained" color="primary" size="small">
                          Buy
                        </Button>
                        {props.admin && <EditIcon style={{paddingLeft:"180px",paddingRight:"5px"}}/>}
                              {props.admin && <DeleteIcon />}
              </Grid>
            </Card>
            <Card style={{width:"300px",alignContent:"center",marginRight:"50px"}}>
                  <img src="https://media.gettyimages.com/id/1297260057/photo/black-headphones-isolated-on-white-background.jpg?s=1024x1024&w=gi&k=20&c=GkKAzyg5M1qRi2L218AY5Zu6ffQTgsdoHO7AImYdTVk=" alt="Shoe image" width="300px" height="300px"/>
                   <span style={{float:"left",marginLeft:"5px",fontWeight:"bold"}}>Ear phones</span>
                    <span style={{float:"right",marginRight:"5px",fontWeight:"bold"}}>Rs.2300</span>
                    <Grid container>
                    <Typography variant="body" align="justify" style={{marginLeft:"5px",marginRight:"5px"}}> Choose from a wide range of wireless headphones, earphones, Bluetooth earphones, earbuds, headphones with mic, etc from top brands</Typography>
                    </Grid>
                    <Grid container style={{paddingTop:"10px",paddingBottom:"10px",marginLeft:"5px",bottom:0}}>
                        <Button variant="contained" color="primary" size="small">
                                Buy
                              </Button>
                              {props.admin && <EditIcon style={{paddingLeft:"180px",paddingRight:"5px"}}/>}
                                                                                                                  {props.admin && <DeleteIcon />}
                    </Grid>
            </Card>
      </Grid>
          <Grid container direction = "row" style={{textAlign:"center",paddingTop:"30px"}}>
            <Card style={{width:"300px",alignContent:"center",paddingRight:"50px"}}>
            <img src="https://media.gettyimages.com/id/173239968/photo/skinny-tight-blue-jeans-on-white-background.jpg?s=612x612&w=gi&k=20&c=QqoFe-m6N_FQKu6KyDVrHUwmKUyh3nkFK8QbDrl3OVM=" alt="Shoe image" width="300px" height="300px"/>
             <span style={{float:"left",marginLeft:"5px",fontWeight:"bold"}}>Jeans</span>
              <span style={{float:"right",marginRight:"5px",fontWeight:"bold"}}>Rs.1500</span>
              <Grid container>
              <Typography variant="body" align="justify" style={{marginLeft:"5px",marginRight:"5px"}}>The canvas shoe is a very basic form of casual shoe or sneaker. It is constructed very simply with a canvas upper and a rubber sole. </Typography>
              </Grid>
              <Grid container style={{paddingTop:"10px",paddingBottom:"10px",marginLeft:"5px",bottom:0}}>
                  <Button variant="contained" color="primary" size="small">
                          Buy
                        </Button>
                         {props.admin && <EditIcon style={{paddingLeft:"180px",paddingRight:"5px"}}/>}
                            {props.admin && <DeleteIcon />}
              </Grid>
            </Card>
            <Card style={{width:"300px",alignContent:"center",paddingRight:"50px"}}>
                  <img src="https://media.gettyimages.com/id/1309776513/photo/black-suitcase-on-wheels-isolated-on-white-background.jpg?s=612x612&w=gi&k=20&c=imrYWt7HvA7YDtBhC4U1ZQfxI7dkn3ADf0HX3pr6BnI=" alt="Shoe image" width="300px" height="300px"/>
                   <span style={{float:"left",marginLeft:"5px",fontWeight:"bold"}}>Trolley</span>
                    <span style={{float:"right",marginRight:"5px",fontWeight:"bold"}}>Rs.1500</span>
                    <Grid container style={{minHeight:"30px"}}>
                    <Typography variant="body" align="justify" style={{marginLeft:"5px",marginRight:"5px"}}>Choose from latest collection of Watches Online. Buy Wrist Watches at best price from top brands. Offer price limited for 3 days only</Typography>
                    </Grid>
                    <Grid container style={{paddingTop:"10px",paddingBottom:"10px",marginLeft:"5px"}}>
                        <Button variant="contained" color="primary" size="small">
                                Buy
                              </Button>
                              {props.admin && <EditIcon style={{paddingLeft:"180px",paddingRight:"5px"}}/>}
                             {props.admin && <DeleteIcon />}
                    </Grid>
                  </Card>
                  <Card style={{width:"300px",alignContent:"center",marginRight:"50px"}}>
                        <img src="https://media.gettyimages.com/id/1406304909/photo/smartphone-isolated-on-white-background.jpg?s=612x612&w=gi&k=20&c=KGHi7YMXor1YBaqcVUuncs-gbCGh3smCuWZA-PnaDl4=" alt="Shoe image" width="300px" height="300px"/>
                         <span style={{float:"left",marginLeft:"5px",fontWeight:"bold"}}>iPhone</span>
                          <span style={{float:"right",marginRight:"5px",fontWeight:"bold"}}>Rs.32300</span>
                          <Grid container>
                          <Typography variant="body" align="justify" style={{marginLeft:"5px",marginRight:"5px"}}> Choose from a wide range of wireless headphones, earphones, Bluetooth earphones, earbuds, headphones with mic, etc from top brands</Typography>
                          </Grid>
                          <Grid container style={{paddingTop:"10px",paddingBottom:"10px",marginLeft:"5px",bottom:0}}>
                              <Button variant="contained" color="primary" size="small">
                                      Buy
                                    </Button>
                                     {props.admin && <EditIcon style={{paddingLeft:"180px",paddingRight:"5px"}}/>}
                                                                                    {props.admin && <DeleteIcon />}
                          </Grid>
                  </Card>
            </Grid>
      </Grid>
  )
}