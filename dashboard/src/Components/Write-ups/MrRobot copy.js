import React from 'react';
import {Link} from 'react-router-dom';
import ScrollspyNav from "react-scrollspy-nav";

import landing from '../../img/robot.jpg'
import error from '../../img/robot/404.jpg';
import corrPass from '../../img/robot/correct-pass.jpg';
import creds from '../../img/robot/creds.jpg';
import gobuster from '../../img/robot/gobuster.jpg';
import hashcat from '../../img/robot/hashcat.jpg';
import invalid from '../../img/robot/invalid.jpg';
import invalid2 from '../../img/robot/invalid2.jpg';
import key1 from '../../img/robot/key1.jpg';
import key2 from '../../img/robot/key2.jpg';
import key3 from '../../img/robot/key3.jpg';
import ncListen from '../../img/robot/nc-listen.jpg';
import nmap from '../../img/robot/nmap.png';
import privEsc from '../../img/robot/privesc.jpg';
import revShell from '../../img/robot/revshell.jpg';
import robots from '../../img/robot/robots.jpg';
import source from '../../img/robot/source.jpg';
import su from '../../img/robot/su.jpg';
import suid from '../../img/robot/suid.jpg';
import website from '../../img/robot/website.jpg';
import wordlist from '../../img/robot/wordlist.jpg';
import wordpressUpdate from '../../img/robot/wordpress-update.jpg';
import wordpress from '../../img/robot/wordpress.jpg';
import wpscan from '../../img/robot/wpscan.jpg';

class MrRobot extends React.Component {
    render() {
        return (
            <div className="writeup" >
               
                    <div className="container-fluid" >
                    <div className="row bg-dark ">
                        <nav className="col-3 px-1 position-fixed offset" id="sticky-sidebar">
                            <a href="https://tryhackme.com/room/mrrobot" target="_blank" className="nav-header">Mr Robot</a>
                            <hr></hr>
                            <ScrollspyNav className="nav nav-pills flex-column mb-auto" scrollTargetIds={['intro','enumeration','portscan','webenum','key1','exploitation','wordpress','privesc','robot','key2','root','key3']} activeNavClass="active" router="HashRouter">
                                <li className="nav-item">
                                    <a className="nav-link" href="#intro">1. Introduction</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#enumeration">2. Enumeration</a>
                                    <a className="nav-link level-2" href="#portscan">a. Port Scanning</a>
                                    <a className="nav-link level-2" href="#webenum">b. Web Enumeration</a>
                                    <a className="nav-link level-3" href="#key1">i. Key 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#exploitation">3. Exploitation</a>
                                    <a className="nav-link level-2" href="#wordpress">a. Wordpress</a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link" href="#privesc">4. Privilege Escalation</a>
                                    <a className="nav-link level-2" href="#robot">a. User: robot</a>
                                    <a className="nav-link level-3" href="#key2">i. Key 2</a>
                                    <a className="nav-link level-2" href="#root">b. User: root</a>
                                    <a className="nav-link level-3" href="#key3">i. Key 3</a>
                                </li>
                            </ScrollspyNav>
                            <hr></hr>

                                                      
                        </nav>
                        <div className="content col offset-3"  id="writeup-robot">
                            <div>
                                <div className="carousel landing">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active landing-container">
                                            <img className="writeup-landing" src={landing} alt="Background image"></img>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <h1 id="intro">Introduction</h1>
                            <p>This box is based on the Mr. Robot show and is a fun beginner/intermediate CTF.</p>
                            <p>This box falls into the following categories:</p>
                            <ul>
                                <li>Linux</li>
                                <li>Wordpress</li>
                                <li>Misconfiguration</li>
                            </ul>
                            <hr></hr>
                            
                            
                            <h1 id="enumeration">Enumeration</h1>
                            
                            <h3 id="portscan">Port Scanning</h3>
                            <p>First, I used nmap to scan the box.</p>
                            <p className="code-snippet">&gt; nmap -sS -sC -sV -O 10.10.113.82 -oN nmap.scan</p>
                            <p>The above command explained:</p>
                            <ul>
                                <li><span className="code-snippet inline">-sS</span> -  Uses a TCP SYN scan, this type of scan never fully forms a connection with the target. Instead, a specially crafted packet is sent and the response is analyzed to produce scan results.</li>
                                <li><span className="code-snippet inline">-sC -sV -O</span> - These tell nmap to use common scripts, attempt to detect the version of running services, and attempt to detect the operating system.</li>
                                <li><span className="code-snippet inline">-oN</span> - This saves the output of the scan to the target file.</li>
                            </ul>
                            <figure className="figure">
                                <img src={nmap} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">nmap scan results.</figcaption>
                            </figure>
                            <hr></hr>
                            <h3 id="webenum">Web Enumeration</h3>
                            <p>After seeing an Apache site running on port 80 and 443, I used Firefox to investigate further.</p>
                            <figure className="figure">
                                <img src={website} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">target homepage.</figcaption>
                            </figure>
                            <p>After an interesting animation, a homepage is shown that allows for commands to be inputted. I ran each of these commands but found nothing of importance.</p>
                            <figure className="figure">
                                <img src={source} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">homepage sourcecode.</figcaption>
                            </figure>
                            <p>The source code also showed nothing of value, apart from a creepy ASCII message.</p>
                            <p>My next step was to use Gobuster to further enumerate the directories of the website.</p>
                            <p>Gobuster uses directory brute forcing to find directories not immediately available to the user.</p>
                            <p className="code-snippet">&gt; gobuster dir -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u 10.10.113.82 -o root-gobuster.scan</p>
                            <figure className="figure">
                                <img src={gobuster} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">results from gobuster scan.</figcaption>
                            </figure>
                            <p>The immediate take-aways from this scan is that several <span className="code-snippet inline">/wp-*</span> directories exist, this tells us that Wordpress is running on this website. Additionally, there is a <span className="code-snippet inline">/robots</span> directory that is worth checking out.</p>
                            <figure className="figure">
                                <img src={robots} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">output from /robots.</figcaption>
                            </figure>
                            <p>Here we see two files that look important, as this is a robots.txt file I assumed that these files were accessible from the root level of the website.</p>
                            <h5 id="key1">Key 1</h5>
                            <p>My suspicions were confirmed by finding the first key:</p>
                            <figure className="figure">
                                <img src={key1} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">first key found.</figcaption>
                            </figure>
                            <p>After downloading and inspecting the other file <span className="code-snippet inline">fsocity.dic</span>, it looks like a wordlist for possible passwords.</p>
                            <figure className="figure">
                                <img src={wordlist} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">contents of fsocity.dic.</figcaption>
                            </figure>
                            <p>Now I have the first key and a wordlist, I used WPScan to enumerate the Wordpress site further.</p>
                            <p className="code-snippet">&gt; wpscan –url 10.10.113.82 -e -o wpscan.scan</p>
                            <br></br>
                            <figure className="figure">
                                <img src={wpscan} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">results from wpscan.</figcaption>
                            </figure>
                            <hr></hr>
                            <h1 id="exploitation">Exploitation</h1>
                            <h3 id="wordpress">Wordpress</h3>
                            <p>The results from this scan unfortunately did not provide much information. Although, a Wordpress version of 4.3.1 was found which is identified as insecure.</p>
                            <p>One feature of Wordpress’s login page is that it will tell you if the username is correct, this makes it relatively easy to guess a username. </p>
                            <figure className="figure">
                                <img src={invalid} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">error message from an incorrect username.</figcaption>
                            </figure>
                            <p>After trying multiple common default usernames, I remembered the theme of the box and eventually tried <span className="code-snippet inline">elliot</span> which came back with a different error message.</p>
                            <figure className="figure">
                                <img src={invalid2} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">error message from a correct username.</figcaption>
                            </figure>
                            <p>This indicates a correct username.</p>
                            <p>Now, using WPScan’s password attack with the wordlist <span className="code-snippet inline">focity.dic</span>, I started brute forcing the login page.</p>
                            <p className="code-snippet">&gt; wpscan –url 10.10.113.82 -U Elliot -P ./fsocity.dic –-password-attack wp-login</p>
                            <p>After some time, the following password worked:</p>
                            <figure className="figure">
                                <img src={corrPass} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">correct combination found.</figcaption>
                            </figure>
                            <p>Now I have a Wordpress login, I can try get an initial foothold by injecting a php reverse shell in the Wordpress theme’s code.</p>
                            <p>This can be done by navigating to Appearance &gt; Editor.</p>
                            <figure className="figure">
                                <img src={wordpress} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">wordpress dashboard.</figcaption>
                            </figure>
                            <p>I then used this <a href="https://github.com/pentestmonkey/php-reverse-shell" target="_blank">shell</a> to inject into the 404 Template.</p>
                            <p className="hint">Note: Don’t forget to edit the reverse shell and change values for your IP address and local port number.</p>
                            <p>After updating the 404.php file with the reverse shell, I committed the changes.</p>
                            <figure className="figure">
                                <img src={wordpressUpdate} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">updating the website's code with the reverse shell.</figcaption>
                            </figure>
                            <p>Now, to catch the shell I set up a netcat listener on the same port I defined in the reverse shell code.</p>
                            <p className="code-snippet">&gt; nc -lvnp 4444</p>
                            <br></br>
                            <figure className="figure">
                                <img src={ncListen} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">nc listening on port 4444.</figcaption>
                            </figure>
                            <p>With my listener running, I navigated to the 404.php file to trigger the reverse shell.</p>
                            <figure className="figure">
                                <img src={error} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">browsing to 404.php to trigger the reverse shell.</figcaption>
                            </figure>
                            <p>And the shell has been caught!</p>
                            <figure className="figure">
                                <img src={revShell} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">confirmation of the caught shell.</figcaption>
                            </figure>
                            <p>Now I have a shell, I stabilised it and started manually enumerating the server.</p>
                            <hr></hr>
                            <h1 id="privesc">Privilege Escalation</h1>
                            <h3 id="robot">User: robot</h3>
                            <p>Pretty quickly I found credentials in <span className="code-snippet inline">/home/robot</span>:</p>
                            <figure className="figure">
                                <img src={creds} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">credentials found in /home/robot.</figcaption>
                            </figure>
                            <p>With this, I will be able to change user. But before that, I need to decrypt the password.</p>
                            <p>This was achieved very easily with hashcat and the rockyou wordlist.</p>
                            <p className="code-snippet">&gt; hashcat -m 0 -a 0 hash.txt /usr/share/wordlists/rockyou.txt</p>
                            <br></br>
                            <figure className="figure">
                                <img src={hashcat} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">cracked password with hashcat.</figcaption>
                            </figure>
                            <p>With the password, I used su to change to user Robot.</p>
                            <figure className="figure">
                                <img src={su} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">cracked password with hashcat.</figcaption>
                            </figure>
                            <h5 id="key2">Key 2</h5>
                            <p>Now I have permissions to view the second key:</p>
                            <figure className="figure">
                                <img src={key2} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">second key found.</figcaption>
                            </figure>
                            <hr></hr>
                            <h3 id="root">User: root</h3>
                            <p>I tried some more manual enumeration which led me to checking all files with the SUID bit set.</p>
                            <p className="code-snippet">&gt; find / -perm /4000 2&gt;/dev/null</p>
                            <p>The above command explained:</p>
                            <ul>
                                <li><span className="code-snippet inline">find /</span> - Search for files, starting at the root directory.</li>
                                <li><span className="code-snippet inline">-perm /4000</span> - Only return files that have the SUID bit set.</li>
                                <li><span className="code-snippet inline">2&gt;/dev/null</span> - Filters out the errors, '2' represents the error descriptor, and '/dev/null' is where output is sent to be ignored.</li>
                            </ul>
                            <figure className="figure">
                                <img src={suid} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">output from the find command.</figcaption>
                            </figure>
                            <p>One file with the SUID bit set that looked very interesting was nmap.</p>
                            <p>Nmap can be used to access root easily by doing the following:</p>
                            <p className="code-snippet">&gt; nmap --interactive</p>
                            <br></br>
                            <p className="code-snippet">&gt; !sh</p>
                            <br></br>
                            <figure className="figure">
                                <img src={privEsc} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">using nmap to get root.</figcaption>
                            </figure>
                            <h5 id="key3">Key 3</h5>
                            <p>With root access, I can now view the final key.</p>
                            <figure className="figure">
                                <img src={key3} className="figure-img img-fluid rounded" alt="nmap scan results"></img>
                                <figcaption className="figure-caption">final key found.</figcaption>
                            </figure>
                            
                            
                            
                            
                            
                            
                            
                            
                        </div>
                    </div>
                    </div>
                
                
            </div>
        )
    }
}

export default MrRobot;