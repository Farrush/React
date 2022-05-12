type Props = {
    title: string
    subtitle: string
}

export const Header = ({title,subtitle}: Props) =>{
    return(
      <header>
        <h1>{title} {subtitle}</h1>
        
      <hr/>
        
      </header>
    )
  }
