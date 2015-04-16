#pragma strict

 
function OnCollisionEnter (col : Collision)
{
    if(col.gameObject.tag == "Wall")
    {
        Destroy(gameObject);
    }
}