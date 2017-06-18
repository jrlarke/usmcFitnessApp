import React from 'react';
import {Meteor} from 'meteor/meteor'
import RaisedButton from 'material-ui/RaisedButton';
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';
import { observer } from 'mobx-react'
import LogInState from '../login/client/state'
import FormState from '../form/state';
import GeneralState from '../general/state';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const renderContent = () => {
  let content
    content = (
        <Center column>
          <div>
            <h1>HITT CFT Preparation</h1>
            <p>This 25 week program will prepare Marines for the CFT</p>
            <ScrollView height={"100vh"}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn></TableHeaderColumn>
                  <TableHeaderColumn>Monday</TableHeaderColumn>
                  <TableHeaderColumn>Tuesday</TableHeaderColumn>
                  <TableHeaderColumn>Wednesday</TableHeaderColumn>
                  <TableHeaderColumn>Thursday</TableHeaderColumn>
                  <TableHeaderColumn>Friday</TableHeaderColumn>
                  <TableHeaderColumn>Saturday</TableHeaderColumn>
                  <TableHeaderColumn>Sunday</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableRowColumn>Week 1</TableRowColumn>
                  <TableRowColumn>Warrior 1</TableRowColumn>
                  <TableRowColumn>Athlete 1</TableRowColumn>
                  <TableRowColumn>Reload 1</TableRowColumn>
                  <TableRowColumn>Combat 1</TableRowColumn>
                  <TableRowColumn>Company 1</TableRowColumn>
                  <TableRowColumn>Reload 1</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 2</TableRowColumn>
                  <TableRowColumn>Warrior 2</TableRowColumn>
                  <TableRowColumn>Athlete 2</TableRowColumn>
                  <TableRowColumn>Reload 2</TableRowColumn>
                  <TableRowColumn>Combat 2</TableRowColumn>
                  <TableRowColumn>Company 2</TableRowColumn>
                  <TableRowColumn>Reload 2</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 3</TableRowColumn>
                  <TableRowColumn>Warrior 3</TableRowColumn>
                  <TableRowColumn>Athlete 3</TableRowColumn>
                  <TableRowColumn>Reload 3</TableRowColumn>
                  <TableRowColumn>Combat 3</TableRowColumn>
                  <TableRowColumn>Company 3</TableRowColumn>
                  <TableRowColumn>Reload 3</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 4</TableRowColumn>
                  <TableRowColumn>Warrior 4</TableRowColumn>
                  <TableRowColumn>Athlete 4</TableRowColumn>
                  <TableRowColumn>Reload 4</TableRowColumn>
                  <TableRowColumn>Combat 4</TableRowColumn>
                  <TableRowColumn>Company 4</TableRowColumn>
                  <TableRowColumn>Reload 4</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 5</TableRowColumn>
                  <TableRowColumn>Warrior 5</TableRowColumn>
                  <TableRowColumn>Athlete 5</TableRowColumn>
                  <TableRowColumn>Reload 5</TableRowColumn>
                  <TableRowColumn>Combat 5</TableRowColumn>
                  <TableRowColumn>Company 5</TableRowColumn>
                  <TableRowColumn>Reload 5</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 6</TableRowColumn>
                  <TableRowColumn>Warrior 6</TableRowColumn>
                  <TableRowColumn>Athlete 6</TableRowColumn>
                  <TableRowColumn>Reload 6</TableRowColumn>
                  <TableRowColumn>Combat 6</TableRowColumn>
                  <TableRowColumn>Company 6</TableRowColumn>
                  <TableRowColumn>Reload 6</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 7</TableRowColumn>
                  <TableRowColumn>Warrior 7</TableRowColumn>
                  <TableRowColumn>Athlete 7</TableRowColumn>
                  <TableRowColumn>Reload 7</TableRowColumn>
                  <TableRowColumn>Combat 7</TableRowColumn>
                  <TableRowColumn>Company 7</TableRowColumn>
                  <TableRowColumn>Reload 7</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 8</TableRowColumn>
                  <TableRowColumn>Warrior 8</TableRowColumn>
                  <TableRowColumn>Athlete 8</TableRowColumn>
                  <TableRowColumn>Reload 8</TableRowColumn>
                  <TableRowColumn>Combat 8</TableRowColumn>
                  <TableRowColumn>Company 8</TableRowColumn>
                  <TableRowColumn>Reload 8</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 9</TableRowColumn>
                  <TableRowColumn>Warrior 9</TableRowColumn>
                  <TableRowColumn>Athlete 9</TableRowColumn>
                  <TableRowColumn>Reload 9</TableRowColumn>
                  <TableRowColumn>Combat 9</TableRowColumn>
                  <TableRowColumn>Company 9</TableRowColumn>
                  <TableRowColumn>Reload 9</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 10</TableRowColumn>
                  <TableRowColumn>Warrior 10</TableRowColumn>
                  <TableRowColumn>Athlete 10</TableRowColumn>
                  <TableRowColumn>Reload 10</TableRowColumn>
                  <TableRowColumn>Combat 10</TableRowColumn>
                  <TableRowColumn>Company 10</TableRowColumn>
                  <TableRowColumn>Reload 10</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 11</TableRowColumn>
                  <TableRowColumn>Warrior 11</TableRowColumn>
                  <TableRowColumn>Athlete 11</TableRowColumn>
                  <TableRowColumn>Reload 11</TableRowColumn>
                  <TableRowColumn>Combat 11</TableRowColumn>
                  <TableRowColumn>Company 11</TableRowColumn>
                  <TableRowColumn>Reload 11</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 12</TableRowColumn>
                  <TableRowColumn>Warrior 12</TableRowColumn>
                  <TableRowColumn>Athlete 12</TableRowColumn>
                  <TableRowColumn>Reload 12</TableRowColumn>
                  <TableRowColumn>Combat 12</TableRowColumn>
                  <TableRowColumn>Company 12</TableRowColumn>
                  <TableRowColumn>Reload 12</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 13</TableRowColumn>
                  <TableRowColumn>Warrior 13</TableRowColumn>
                  <TableRowColumn>Athlete 13</TableRowColumn>
                  <TableRowColumn>Reload 13</TableRowColumn>
                  <TableRowColumn>Combat 13</TableRowColumn>
                  <TableRowColumn>Company 13</TableRowColumn>
                  <TableRowColumn>Reload 13</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 14</TableRowColumn>
                  <TableRowColumn>Warrior 14</TableRowColumn>
                  <TableRowColumn>Athlete 14</TableRowColumn>
                  <TableRowColumn>Reload 14</TableRowColumn>
                  <TableRowColumn>Combat 14</TableRowColumn>
                  <TableRowColumn>Company 14</TableRowColumn>
                  <TableRowColumn>Reload 14</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 15</TableRowColumn>
                  <TableRowColumn>Warrior 15</TableRowColumn>
                  <TableRowColumn>Athlete 15</TableRowColumn>
                  <TableRowColumn>Reload 15</TableRowColumn>
                  <TableRowColumn>Combat 15</TableRowColumn>
                  <TableRowColumn>Company 15</TableRowColumn>
                  <TableRowColumn>Reload 15</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 16</TableRowColumn>
                  <TableRowColumn>Warrior 16</TableRowColumn>
                  <TableRowColumn>Athlete 16</TableRowColumn>
                  <TableRowColumn>Reload 16</TableRowColumn>
                  <TableRowColumn>Combat 16</TableRowColumn>
                  <TableRowColumn>Company 16</TableRowColumn>
                  <TableRowColumn>Reload 16</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 17</TableRowColumn>
                  <TableRowColumn>Warrior 17</TableRowColumn>
                  <TableRowColumn>Athlete 17</TableRowColumn>
                  <TableRowColumn>Reload 17</TableRowColumn>
                  <TableRowColumn>Combat 17</TableRowColumn>
                  <TableRowColumn>Company 17</TableRowColumn>
                  <TableRowColumn>Reload 17</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 18</TableRowColumn>
                  <TableRowColumn>Warrior 18</TableRowColumn>
                  <TableRowColumn>Athlete 18</TableRowColumn>
                  <TableRowColumn>Reload 18</TableRowColumn>
                  <TableRowColumn>Combat 18</TableRowColumn>
                  <TableRowColumn>Company 18</TableRowColumn>
                  <TableRowColumn>Reload 18</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 19</TableRowColumn>
                  <TableRowColumn>Warrior 19</TableRowColumn>
                  <TableRowColumn>Athlete 19</TableRowColumn>
                  <TableRowColumn>Reload 19</TableRowColumn>
                  <TableRowColumn>Combat 19</TableRowColumn>
                  <TableRowColumn>Company 19</TableRowColumn>
                  <TableRowColumn>Reload 19</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 20</TableRowColumn>
                  <TableRowColumn>Warrior 20</TableRowColumn>
                  <TableRowColumn>Athlete 20</TableRowColumn>
                  <TableRowColumn>Reload 20</TableRowColumn>
                  <TableRowColumn>Combat 20</TableRowColumn>
                  <TableRowColumn>Company 20</TableRowColumn>
                  <TableRowColumn>Reload 20</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 21</TableRowColumn>
                  <TableRowColumn>Warrior 21</TableRowColumn>
                  <TableRowColumn>Athlete 21</TableRowColumn>
                  <TableRowColumn>Reload 21</TableRowColumn>
                  <TableRowColumn>Combat 21</TableRowColumn>
                  <TableRowColumn>Company 21</TableRowColumn>
                  <TableRowColumn>Reload 21</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 22</TableRowColumn>
                  <TableRowColumn>Warrior 22</TableRowColumn>
                  <TableRowColumn>Athlete 22</TableRowColumn>
                  <TableRowColumn>Reload 22</TableRowColumn>
                  <TableRowColumn>Combat 22</TableRowColumn>
                  <TableRowColumn>Company 22</TableRowColumn>
                  <TableRowColumn>Reload 22</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 23</TableRowColumn>
                  <TableRowColumn>Warrior 23</TableRowColumn>
                  <TableRowColumn>Athlete 23</TableRowColumn>
                  <TableRowColumn>Reload 23</TableRowColumn>
                  <TableRowColumn>Combat 23</TableRowColumn>
                  <TableRowColumn>Company 23</TableRowColumn>
                  <TableRowColumn>Reload 23</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 24</TableRowColumn>
                  <TableRowColumn>Warrior 24</TableRowColumn>
                  <TableRowColumn>Athlete 24</TableRowColumn>
                  <TableRowColumn>Reload 24</TableRowColumn>
                  <TableRowColumn>Combat 24</TableRowColumn>
                  <TableRowColumn>Company 24</TableRowColumn>
                  <TableRowColumn>Reload 24</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Week 25</TableRowColumn>
                  <TableRowColumn>Warrior 25</TableRowColumn>
                  <TableRowColumn>Athlete 25</TableRowColumn>
                  <TableRowColumn>Reload 25</TableRowColumn>
                  <TableRowColumn>Combat 25</TableRowColumn>
                  <TableRowColumn>Company 25</TableRowColumn>
                  <TableRowColumn>Reload 25</TableRowColumn>
                  <TableRowColumn>Rest Day</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
            </ScrollView>
            <RaisedButton onClick={goBack} label='Back' style={{width: 300, margin: 'auto', marginTop: 10}}/>
          </div>
        </Center>

    )
    return content
  }

  const goBack = (evt) => {
    evt.preventDefault()
    FormState.setShowCft(false)
    GeneralState.changeShouldRender('form')
  }

  const Cft = () => {
    return (
      <div>
        {renderContent()}
      </div>
    )
  }

  export default observer(Cft)
