import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
    return (
        <StyledFooter>
          <Container>
              <img src="./images/logo_white.svg" alt="" />

              <Flex>
                  <ul>
                      <li>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, placeat quia fuga asperiores esse beatae ipsa cumque consectetur natus.
                      </li>
                      <li>
                          +234-813-928-9312
                      </li>
                      <li>
                          ghostcybertron@gmail.com
                      </li>
                  </ul>

                  <ul>
                      <li>
                          About Us
                      </li>
                      <li>
                          What We Do
                      </li>
                      <li>
                          FAQ
                      </li>
                  </ul>

                  <ul>
                      <li>
                          Career
                      </li>
                      <li>
                          Blog
                      </li>
                      <li>
                          Contact Us
                      </li>
                  </ul>

                  <SocialIcons/>
              </Flex>

              <p>
                  &copy; 2021 Huddle. All rights reserved
              </p>
          </Container>  
        </StyledFooter>
    )
}
